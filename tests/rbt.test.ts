import { describe, it, expect } from "vitest";
import { RBT_JS, RBTParseError, RBTRuntimeError } from "../src/helpers/rbt";

describe("RBT.fromRules — the exact usage example from the prompt", () => {
  it('transliterates "Example" to "Exemple" with the rule `a > e;`', () => {
    const transliterator = RBT_JS.fromRules("a > e;");
    expect(transliterator.transliterate("Example")).toBe("Exemple");
  });
});

describe("context-free substitution: `a > b;`", () => {
  it.each([
    {
      name: "replaces every occurrence of a single-character key",
      rules: "a > b;",
      input: "banana",
      expected: "bbnbnb",
    },
    { name: "supports multi-character keys", rules: "ab > X;", input: "cabd", expected: "cXd" },
    {
      name: "leaves the string untouched when nothing matches",
      rules: "z > q;",
      input: "hello",
      expected: "hello",
    },
    {
      name: "an empty replacement deletes the key",
      rules: "a > ;",
      input: "banana",
      expected: "bnn",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });
});

describe("whitespace is ignored during compilation unless quoted", () => {
  it.each([
    {
      name: "generously spaced rule compiles the same as a compact one",
      rules: "a   >    b  ;",
      input: "a",
      expected: "b",
    },
    {
      name: "unescaped whitespace between key characters is dropped, so 'a b' means the key 'ab'",
      rules: "a b > X;",
      input: "ab",
      expected: "X",
    },
    {
      name: "a quoted space is a literal, required character",
      rules: "a' 'b > X;",
      input: "a b",
      expected: "X",
    },
    {
      name: "without the literal space present, the quoted-space rule does not fire",
      rules: "a' 'b > X;",
      input: "ab",
      expected: "ab",
    },
    {
      name: "a quoted space in the replacement produces a literal space",
      rules: "a > 'x' ' ' 'y';",
      input: "a",
      expected: "x y",
    },
    {
      name: "'' (two adjacent quotes) is a literal single quote character",
      rules: "a > '' ;",
      input: "a",
      expected: "'",
    },
    {
      name: "whitespace is ignored inside a `::` directive too, so ':: Lower ;' means the same as '::Lower;'",
      rules: ":: Lower ;",
      input: "HELLO",
      expected: "hello",
    },
    {
      name: "whitespace is tolerated around a POSIX class name, so '[: L :]' means the same as '[:L:]'",
      rules: "[: L :] > X;",
      input: "aA1",
      expected: "XX1",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });
});

describe("escaping special characters with a backslash", () => {
  it.each([
    { name: "\\' escapes a literal single quote", rules: "\\' > X;", input: "'", expected: "X" },
    { name: "\\* escapes a literal asterisk", rules: "\\* > X;", input: "*", expected: "X" },
    { name: "\\@ escapes a literal at sign", rules: "\\@ > X;", input: "@", expected: "X" },
    { name: "\\. escapes a literal dot", rules: "\\. > X;", input: ".", expected: "X" },
    { name: "\\_ escapes a literal underscore", rules: "\\_ > X;", input: "_", expected: "X" },
    { name: "\\- escapes a literal hyphen", rules: "\\- > X;", input: "-", expected: "X" },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  it("a backslash escape works in replacement text", () => {
    expect(RBT_JS.fromRules("a > \\*;").transliterate("a")).toBe("*");
  });

  it("a backslash escape works as a member inside a [set]", () => {
    expect(RBT_JS.fromRules("[\\*\\@] > X;").transliterate("*@b")).toBe("XXb");
  });

  it("a backslash escape works in ante-context", () => {
    expect(RBT_JS.fromRules("a\\.{b>c;").transliterate("a.b")).toBe("a.c");
    expect(RBT_JS.fromRules("a\\.{b>c;").transliterate("axb")).toBe("axb");
  });

  it("a backslash escape works in post-context", () => {
    expect(RBT_JS.fromRules("a}\\.>c;").transliterate("a.")).toBe("c.");
  });

  it("a backslash escape can be followed immediately by `|` cursor placement", () => {
    expect(RBT_JS.fromRules("a > \\*|b; b > c;").transliterate("a")).toBe("*c");
  });

  it("a backslash-escaped character keeps working across a `::Null;` pass boundary", () => {
    expect(RBT_JS.fromRules("a > \\_; ::Null; \\_ > Z;").transliterate("a")).toBe("Z");
  });

  it("a backslash immediately followed by a character outside this set falls back to a literal, matchable backslash rather than being silently dropped", () => {
    expect(RBT_JS.fromRules("\\q > X;").transliterate("\\q")).toBe("X");
  });

  it("a bare, unescaped occurrence of one of these characters now has quantifier/grouping meaning instead, and errors clearly if used that way", () => {
    expect(() => RBT_JS.fromRules("* > X;")).toThrow(RBTParseError);
  });
});

describe("that same backslash-escape mechanism now covers nine more characters: `| > ; ( ) ? +`, plus `&` and `$`", () => {
  it.each([
    { name: "\\|", rules: "\\| > c;", input: "|", expected: "c" },
    { name: "\\>", rules: "\\> > c;", input: ">", expected: "c" },
    { name: "\\;", rules: "\\; > c;", input: ";", expected: "c" },
    { name: "\\(", rules: "\\( > c;", input: "(", expected: "c" },
    { name: "\\)", rules: "\\) > c;", input: ")", expected: "c" },
    { name: "\\?", rules: "\\? > c;", input: "?", expected: "c" },
    { name: "\\+", rules: "\\+ > c;", input: "+", expected: "c" },
    { name: "\\&", rules: "\\& > c;", input: "&", expected: "c" },
    { name: "\\$", rules: "\\$ > c;", input: "$", expected: "c" },
  ])(
    "$name escapes a literal character directly in a pattern, with no [...] involved at all — none of these nine are usable bare in this position",
    ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    },
  );

  it("and in replacement text, without colliding with existing '|' cursor placement, '$N' backreferences, or '&Name(...)' calls", () => {
    expect(RBT_JS.fromRules("a > \\|;").transliterate("a")).toBe("|");
    expect(RBT_JS.fromRules("a > \\$;").transliterate("a")).toBe("$");
    expect(RBT_JS.fromRules("a > \\&;").transliterate("a")).toBe("&");
    expect(RBT_JS.fromRules("(a) > $1$1;").transliterate("a")).toBe("aa");
    expect(RBT_JS.fromRules("(a) > &Any-Upper($1);").transliterate("a")).toBe("A");
  });

  it("as with the original six symbols, a leading backslash from the input that the escape itself doesn't consume is left in place, untouched", () => {
    expect(RBT_JS.fromRules("\\| > c;").transliterate("\\|")).toBe("\\c");
    expect(RBT_JS.fromRules("\\& > c;").transliterate("\\&")).toBe("\\c");
  });

  it.each([
    { name: "\\|", rules: "[\\|] > c;", input: "\\|", expected: "\\c" },
    { name: "\\>", rules: "[\\>] > c;", input: "\\>", expected: "\\c" },
    { name: "\\;", rules: "[\\;] > c;", input: "\\;", expected: "\\c" },
    { name: "\\(", rules: "[\\(] > c;", input: "\\(", expected: "\\c" },
    { name: "\\)", rules: "[\\)] > c;", input: "\\)", expected: "\\c" },
    { name: "\\?", rules: "[\\?] > c;", input: "\\?", expected: "\\c" },
    { name: "\\+", rules: "[\\+] > c;", input: "\\+", expected: "\\c" },
    { name: "\\&", rules: "[\\&] > c;", input: "\\&", expected: "\\c" },
  ])(
    "$name also works as a single-character member inside a [set], with the same leading-backslash-passes-through behavior",
    ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    },
  );
});

describe("escaping special characters by enclosing them in single quotes", () => {
  it("the exact example from the prompt: '_a_' matches underscore, a, underscore literally", () => {
    expect(RBT_JS.fromRules("'_a_' > X;").transliterate("_a_")).toBe("X");
  });

  it("that same quoted sequence does not match a partial prefix", () => {
    expect(RBT_JS.fromRules("'_a_' > X;").transliterate("_a")).toBe("_a");
  });

  it.each([
    { name: "'*'", rules: "'*' > X;", input: "*", expected: "X" },
    { name: "'@'", rules: "'@' > X;", input: "@", expected: "X" },
    { name: "'.'", rules: "'.' > X;", input: ".", expected: "X" },
    { name: "'_'", rules: "'_' > X;", input: "_", expected: "X" },
    { name: "'-'", rules: "'-' > X;", input: "-", expected: "X" },
  ])("$name quotes that single character literally", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  it("an escaped quote can be embedded inside a larger quoted region without ending it early", () => {
    expect(RBT_JS.fromRules("'a\\'b' > X;").transliterate("a'b")).toBe("X");
  });

  it("the backslash form and the quote form of the same character are interchangeable", () => {
    expect(RBT_JS.fromRules("\\- > D;").transliterate("a-b")).toBe("aDb");
    expect(RBT_JS.fromRules("'-' > D;").transliterate("a-b")).toBe("aDb");
  });
});

describe("inside a [set], the six escapable symbols are literal even when written bare, without a backslash", () => {
  it("the exact example from the request: `['*@._-]` matches all six symbols literally with no escaping at all", () => {
    expect(RBT_JS.fromRules("['*@._-] > X;").transliterate("'*@._-")).toBe("XXXXXX");
    expect(RBT_JS.fromRules("['*@._-] > X;").transliterate("a'b*c@d.e_f-g")).toBe("aXbXcXdXeXfXg");
  });

  it.each([
    { name: "bare quote", rules: "['] > X;", input: "'", expected: "X" },
    {
      name: "bare asterisk (structural everywhere else, as the '*' quantifier)",
      rules: "[*] > X;",
      input: "*",
      expected: "X",
    },
    { name: "bare at-sign", rules: "[@] > X;", input: "@", expected: "X" },
    { name: "bare dot", rules: "[.] > X;", input: ".", expected: "X" },
    { name: "bare underscore", rules: "[_] > X;", input: "_", expected: "X" },
  ])("$name is a valid, literal set member on its own", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  it("a bare hyphen with no other members has neither a left nor a right boundary, so it is unambiguously literal too; its full, context-dependent behavior (as a range operator between two characters) is covered in its own dedicated section below", () => {
    expect(RBT_JS.fromRules("[-] > X;").transliterate("-")).toBe("X");
  });

  it("backslash escaping still works inside a set too, exactly as before, and can be freely mixed with bare symbols", () => {
    expect(RBT_JS.fromRules("[\\'] > X;").transliterate("'")).toBe("X");
    expect(RBT_JS.fromRules("[\\*] > X;").transliterate("*")).toBe("X");
    expect(RBT_JS.fromRules("[a\\*'] > X;").transliterate("a*'")).toBe("XXX");
  });

  it("outside a set, these symbols still require backslash or quoting exactly as before — this change is scoped to inside [...] only", () => {
    expect(RBT_JS.fromRules("a' 'b > X;").transliterate("a b")).toBe("X");
    expect(RBT_JS.fromRules("\\' > X;").transliterate("'")).toBe("X");
    expect(() => RBT_JS.fromRules("* > X;")).toThrow(RBTParseError);
  });

  it("combines correctly with set negation, both for membership and for the leading '^' detection itself", () => {
    expect(RBT_JS.fromRules("[^'*@._-] > X;").transliterate("a'b")).toBe("X'X");
    expect(RBT_JS.fromRules("[^*] > X;").transliterate("a*")).toBe("X*");
  });

  it("a leading bare symbol that is not '^' is just an ordinary member, not a negation trigger", () => {
    expect(RBT_JS.fromRules("[*a] > X;").transliterate("*ab")).toBe("XXb");
  });

  it("combines correctly with nested brackets, POSIX classes, and multi-character strings", () => {
    expect(RBT_JS.fromRules("[[*@]bc] > X;").transliterate("*@bc")).toBe("XXXX");
    expect(RBT_JS.fromRules("[*[:Lu:]] > X;").transliterate("*A")).toBe("XX");
    expect(RBT_JS.fromRules("[{a*b}] > X;").transliterate("a*b")).toBe("X");
  });

  it("combines correctly with a \\uXXXX escape in the same set", () => {
    expect(RBT_JS.fromRules("[a*\\u0042._] > X;").transliterate("aB*._c")).toBe("XXXXXc");
  });

  it("whitespace around bare symbols inside a set is still ignored, consistent with the rest of the grammar", () => {
    expect(RBT_JS.fromRules("[ * @ ] > X;").transliterate("*@")).toBe("XX");
  });

  it("an unterminated set containing a bare symbol still raises a clear parse error", () => {
    expect(() => RBT_JS.fromRules("[*")).toThrow(RBTParseError);
  });
});

describe("the seven additional structural characters `| > ; ( ) ? +` are also literal when written bare inside a [set]", () => {
  it.each([
    {
      name: "bare pipe (the cursor-placement marker everywhere else)",
      rules: "[|] > X;",
      input: "|",
      expected: "X",
    },
    {
      name: "bare greater-than (the replacement arrow everywhere else)",
      rules: "[>] > X;",
      input: ">",
      expected: "X",
    },
    {
      name: "bare semicolon (the rule terminator everywhere else)",
      rules: "[;] > X;",
      input: ";",
      expected: "X",
    },
    { name: "bare open paren", rules: "[(] > X;", input: "(", expected: "X" },
    { name: "bare close paren", rules: "[)] > X;", input: ")", expected: "X" },
    {
      name: "bare question mark (the '?' quantifier everywhere else)",
      rules: "[?] > X;",
      input: "?",
      expected: "X",
    },
    {
      name: "bare plus (the '+' quantifier everywhere else)",
      rules: "[+] > X;",
      input: "+",
      expected: "X",
    },
  ])("$name is a valid, literal set member on its own", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  it("all seven combine together in the same set, alongside an ordinary letter that correctly stays untouched", () => {
    expect(RBT_JS.fromRules("[|>;()?+] > X;").transliterate("za|b>c;d(e)f?g+h")).toBe(
      "zaXbXcXdXeXfXgXh",
    );
  });

  it("outside a set, these symbols keep their existing structural meaning exactly as before — this relaxation is scoped to inside [...] only", () => {
    expect(() => RBT_JS.fromRules("| > X;")).toThrow(RBTParseError);
    expect(() => RBT_JS.fromRules("; > X;")).toThrow(RBTParseError);
    expect(RBT_JS.fromRules("(a)? > X;").transliterate("a")).toBe("X");
  });

  it("works as a range endpoint too, via the exact same mechanism used for any other bare set member", () => {
    expect(RBT_JS.fromRules("[!-+] > X;").transliterate("!,+")).toBe("X,X");
  });
});

describe("'&' is deliberately excluded from that relaxation: it remains reserved bare inside a [set]", () => {
  it("a bare, unescaped '&' still raises the exact same parse error as before this fix", () => {
    expect(() => RBT_JS.fromRules("[&] > c;")).toThrow(RBTParseError);
  });

  it("a backslash-escaped '\\&' works as a literal set member, exactly like the other escapable symbols", () => {
    expect(RBT_JS.fromRules("[\\&] > c;").transliterate("&")).toBe("c");
  });

  it("wrapping it as a single-character {&} multi-character string is the other way in", () => {
    expect(RBT_JS.fromRules("[{&}] > c;").transliterate("&")).toBe("c");
  });

  it("so the original reported rule now fails clearly on '&' specifically, once '|' no longer masks it", () => {
    expect(() => RBT_JS.fromRules("[|&] > c;")).toThrow(RBTParseError);
  });

  it("the working equivalent, using {&} in place of the bare '&', returns the originally expected result", () => {
    expect(RBT_JS.fromRules("[|{&}] > c;").transliterate("a|b&")).toBe("acbc");
  });
});

describe("a bare, unescaped '$' is reserved (ICU's 'aether' concept) rather than being made literal by this fix", () => {
  it.each([
    { name: "alone in a pattern, with no [...] involved at all", rules: "$ > c;", input: "$" },
    { name: "alone inside a [set]", rules: "[$] > c;", input: "$" },
  ])(
    "$name: '$' parses without error but matches nothing at all — not a literal '$', not zero-width anywhere — so the input passes through completely untouched (and the set is not rejected as the empty '[]' set)",
    ({ rules, input }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(input);
    },
  );

  it("a literal, matchable '$' is still available via a backslash escape or as a {$} string", () => {
    expect(RBT_JS.fromRules("\\$ > c;").transliterate("$")).toBe("c");
    expect(RBT_JS.fromRules("[{$}] > c;").transliterate("$")).toBe("c");
  });

  it("mixed into a set alongside a real member, it contributes nothing — the set behaves exactly as if '$' were not there at all", () => {
    expect(RBT_JS.fromRules("[a$] > X;").transliterate("a$")).toBe("X$");
  });

  it("negating a set containing only '$' matches every real character, including a literal '$' in the input, since '$' itself contributed no positive members to negate", () => {
    expect(RBT_JS.fromRules("[^$] > X;").transliterate("q$")).toBe("XX");
  });

  it("bare inside a (...) group too, for consistency with every other atom position", () => {
    expect(RBT_JS.fromRules("($) > c;").transliterate("$")).toBe("$");
  });
});

describe("UnicodeSet character classes: `[abc] > d;`", () => {
  it.each([
    { name: "matches any member of the set", rules: "[abc] > d;", input: "abc", expected: "ddd" },
    {
      name: "leaves non-members untouched",
      rules: "[abc] > d;",
      input: "xabcy",
      expected: "xdddy",
    },
    {
      name: "a trailing '-' (right before ']') is a literal set member, not a range operator",
      rules: "[a-] > Z;",
      input: "a-b",
      expected: "ZZb",
    },
    {
      name: "'^' not in leading position is a literal set member, not negation",
      rules: "[a^-] > Z;",
      input: "a^-b",
      expected: "ZZZb",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });
});

describe("the dash '-' as a range operator inside a [set]: `[b-d]`", () => {
  it("the exact worked example: `[b-df-hj-np-tv-z]`, the standard idiom for ASCII lowercase consonants, chaining five ranges to exclude the vowels", () => {
    expect(
      RBT_JS.fromRules("[b-df-hj-np-tv-z] > X;").transliterate("abcdefghijklmnopqrstuvwxyz"),
    ).toBe("aXXXeXXXiXXXXXoXXXXXuXXXXX");
  });

  it.each([
    {
      name: "a simple range matches every character in the inclusive span",
      rules: "[b-d] > X;",
      input: "abcde",
      expected: "aXXXe",
    },
    {
      name: "a single-character range (start equals end) is valid, equivalent to a plain literal",
      rules: "[a-a] > X;",
      input: "ab",
      expected: "Xb",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  describe("escaping a literal dash inside a set, exactly as specified", () => {
    it.each([
      {
        name: "a dash at the absolute beginning of the set is literal, since it has no left boundary",
        rules: "[-abc] > X;",
        input: "-abcd",
        expected: "XXXXd",
      },
      {
        name: "a dash at the absolute end of the set is literal, since it has no right boundary",
        rules: "[abc-] > X;",
        input: "abc-d",
        expected: "XXXXd",
      },
      {
        name: "a backslash-escaped dash is always literal, standalone",
        rules: "[\\-] > X;",
        input: "-",
        expected: "X",
      },
      {
        name: "a backslash-escaped dash between two letters is literal text, not a range, even though it sits between two characters",
        rules: "[a\\-z] > X;",
        input: "abz",
        expected: "XbX",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });

  describe("a negated range excludes every character in the span, via the same code-point complement used for literal members and POSIX classes", () => {
    it.each([
      {
        name: "[^a-z] excludes the whole range and matches everything else",
        rules: "[^a-z] > X;",
        input: "XYZ123abc",
        expected: "XXXXXXabc",
      },
      {
        name: "negating the exact consonant-range idiom keeps consonants and replaces everything else, including the vowels",
        rules: "[^b-df-hj-np-tv-z] > X;",
        input: "arm",
        expected: "Xrm",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });

  it("a range combines with a POSIX class, a multi-character string, and a nested bracket, each in the same set", () => {
    expect(RBT_JS.fromRules("[a-c[:Lu:]] > X;").transliterate("abcABCd")).toBe("XXXXXXd");
    expect(RBT_JS.fromRules("[a-c{de}] > X;").transliterate("abcde f")).toBe("XXXX f");
    expect(RBT_JS.fromRules("[[a-c]xy] > X;").transliterate("abcxyz")).toBe("XXXXXz");
  });

  it("a range-containing set can be quantified with '+' and '*' exactly like any other set", () => {
    expect(RBT_JS.fromRules("[a-c]+ > X;").transliterate("aabbccz")).toBe("Xz");
    expect(RBT_JS.fromRules("[a-c]*z > X;").transliterate("aabbccz")).toBe("X");
  });

  it("a backwards range, where the start code point is greater than the end, raises a clear parse error instead of silently misbehaving", () => {
    expect(() => RBT_JS.fromRules("[z-a] > X;")).toThrow(RBTParseError);
    expect(() => RBT_JS.fromRules("[a--z] > X;")).toThrow(RBTParseError);
  });

  it("either endpoint of a range may be written as a \\uXXXX escape", () => {
    expect(RBT_JS.fromRules("[\\u0061-c] > X;").transliterate("abcd")).toBe("XXXd");
    expect(RBT_JS.fromRules("[a-\\u0063] > X;").transliterate("abcd")).toBe("XXXd");
  });

  it("a range may span two of the six bare-escapable symbols too, since ranges operate purely on code point value", () => {
    expect(RBT_JS.fromRules("[.-@] > X;").transliterate(".0@A")).toBe("XXXA");
  });

  it("a range can span astral (surrogate-pair) code points", () => {
    const start = String.fromCodePoint(0x10000);
    const end = String.fromCodePoint(0x10005);
    const mid = String.fromCodePoint(0x10002);
    expect(RBT_JS.fromRules(`[${start}-${end}] > X;`).transliterate(mid + "a")).toBe("Xa");
  });

  it("outside of a [set], a dash never carries range meaning and needs no escaping at all, exactly as before", () => {
    expect(RBT_JS.fromRules("a-b > X;").transliterate("a-b")).toBe("X");
  });

  it("whitespace around the range dash is ignored, consistent with the rest of the grammar", () => {
    expect(RBT_JS.fromRules("[a - c] > X;").transliterate("abcd")).toBe("XXXd");
  });
});

describe("negated character sets: `[^abc]`", () => {
  it.each([
    {
      name: "matches any character not listed",
      rules: "[^abc] > X;",
      input: "xyzabc",
      expected: "XXXabc",
    },
    {
      name: "matches digits, punctuation, and letters outside the set alike",
      rules: "[^a] > X;",
      input: "1 b!a",
      expected: "XXXXa",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  it("an empty negated set body '[^]' is still a parse error", () => {
    expect(() => RBT_JS.fromRules("[^] > X;")).toThrow(RBTParseError);
  });
});

describe("POSIX-style property classes: `[:Name:]`", () => {
  it.each([
    {
      name: "[:M:] matches combining marks (nonspacing and spacing alike)",
      rules: "[:M:] > X;",
      input: "e\u0301e",
      expected: "eXe",
    },
    {
      name: "[:Mn:] matches a nonspacing combining accent",
      rules: "[:Mn:] > X;",
      input: "e\u0301",
      expected: "eX",
    },
    {
      name: "[:Mn:] does NOT match a spacing combining mark (Devanagari vowel sign AA), unlike [:M:]",
      rules: "[:Mn:] > X;",
      input: "k\u093e",
      expected: "k\u093e",
    },
    {
      name: "[:M:] DOES match that same spacing combining mark",
      rules: "[:M:] > X;",
      input: "k\u093e",
      expected: "kX",
    },
    {
      name: "[:Lu:] matches only uppercase letters",
      rules: "[:Lu:] > x;",
      input: "AbC1",
      expected: "xbx1",
    },
    {
      name: "[:Ll:] matches only lowercase letters",
      rules: "[:Ll:] > X;",
      input: "AbC1",
      expected: "AXC1",
    },
    {
      name: "[:Lu:] and [:Ll:] work across non-Latin scripts (Greek)",
      rules: "[:Lu:] > x; [:Ll:] > y;",
      input: "\u0391\u03b1",
      expected: "xy",
    },
    {
      name: "[:L:] matches letters from any script and rejects digits and spaces",
      rules: "[:L:] > X;",
      input: "a1 \u0628 2",
      expected: "X1 X 2",
    },
    {
      name: "[:Arabic:] matches Arabic-script characters only",
      rules: "[:Arabic:] > X;",
      input: "a\u0628b",
      expected: "aXb",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  describe("`[:^L:]` — matches a non-letter character, or zero-width at the start/end of the string", () => {
    describe("as ante-context (start-of-string behavior)", () => {
      it.each([
        {
          name: "fires at the true start of the string",
          rules: "[:^L:] { a > A;",
          input: "a",
          expected: "A",
        },
        {
          name: "fires when preceded by an ordinary non-letter character",
          rules: "[:^L:] { a > A;",
          input: "5a",
          expected: "5A",
        },
        {
          name: "does not fire when preceded by a letter",
          rules: "[:^L:] { a > A;",
          input: "ba",
          expected: "ba",
        },
      ])("$name", ({ rules, input, expected }) => {
        expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
      });
    });

    describe("as post-context (end-of-string behavior)", () => {
      it.each([
        {
          name: "fires at the true end of the string",
          rules: "a } [:^L:] > A;",
          input: "a",
          expected: "A",
        },
        {
          name: "fires when followed by an ordinary non-letter character",
          rules: "a } [:^L:] > A;",
          input: "a5",
          expected: "A5",
        },
        {
          name: "does not fire when followed by a letter",
          rules: "a } [:^L:] > A;",
          input: "ab",
          expected: "ab",
        },
      ])("$name", ({ rules, input, expected }) => {
        expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
      });
    });

    describe("mixed with an ordinary atom in the same context sequence", () => {
      it.each([
        {
          name: "matches at the true start followed by the literal atom",
          rules: "[:^L:]a{b>c;",
          input: "ab",
          expected: "ac",
        },
        {
          name: "matches after a non-letter followed by the literal atom",
          rules: "[:^L:]a{b>c;",
          input: "5ab",
          expected: "5ac",
        },
        {
          name: "does not match when a letter precedes the literal atom",
          rules: "[:^L:]a{b>c;",
          input: "Xab",
          expected: "Xab",
        },
      ])("$name", ({ rules, input, expected }) => {
        expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
      });
    });

    describe("used directly as a key", () => {
      it("consumes a matching non-letter character normally, since a real character takes priority over the zero-width alternative", () => {
        expect(RBT_JS.fromRules("[:^L:] > X;").transliterate("5")).toBe("X");
      });

      it("falls back to a zero-width match at the true start when the character there is a letter", () => {
        expect(RBT_JS.fromRules("[:^L:] > X;").transliterate("A")).toBe("XA");
      });

      it("a zero-width match pinned in place by `|` is caught by the step-budget guard rather than looping forever", () => {
        expect(() => RBT_JS.fromRules("[:^L:] >| ;").transliterate("A")).toThrow(RBTRuntimeError);
      });
    });
  });

  describe("unsupported POSIX forms raise a clear parse error rather than guessing at semantics", () => {
    it.each([
      { name: "[:Ethiopic:]", rules: "[:Ethiopic:] > x;" },
      { name: "[:Bogus:]", rules: "[:Bogus:] > x;" },
    ])("$name is not implemented and errors clearly", ({ rules }) => {
      expect(() => RBT_JS.fromRules(rules)).toThrow(RBTParseError);
      expect(() => RBT_JS.fromRules(rules)).toThrow("unknown POSIX class token");
    });
  });
});

describe("unicode escapes: `\\uXXXX`", () => {
  it.each([
    {
      name: "a standalone escape matches the exact code point",
      rules: "\\u0041 > x;",
      input: "A",
      expected: "x",
    },
    {
      name: "an escape used as a set member",
      rules: "[\\u0041\\u0042] > x;",
      input: "ABC",
      expected: "xxC",
    },
    {
      name: "an escape in the replacement text emits that literal character",
      rules: "a > \\u00e9;",
      input: "a",
      expected: "\u00e9",
    },
    {
      name: "lowercase and uppercase hex digits both work",
      rules: "\\u00e9 > x; \\u00E8 > y;",
      input: "\u00e9\u00e8",
      expected: "xy",
    },
    {
      name: "an escape works alongside ordinary literal characters in the same key",
      rules: "\\u0041b > X;",
      input: "Ab",
      expected: "X",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  it.each([
    { name: "too few hex digits", rules: "\\u12 > x;" },
    { name: "a non-hex character among the digits", rules: "\\u12g4 > x;" },
    { name: "truncated at end of source", rules: "\\u1" },
  ])("$name raises a clear parse error", ({ rules }) => {
    expect(() => RBT_JS.fromRules(rules)).toThrow(RBTParseError);
    expect(() => RBT_JS.fromRules(rules)).toThrow("\\u escape");
  });
});

describe("combinations of negation, POSIX classes, and nested sets", () => {
  it("the example from the spec: [^[:L:][:M:]] matches anything that is neither a letter nor a mark", () => {
    expect(RBT_JS.fromRules("[^[:L:][:M:]] > X;").transliterate("5a1 e\u0301")).toBe("XaXXe\u0301");
  });

  it("letters and marks are correctly left untouched by that same negated union", () => {
    expect(RBT_JS.fromRules("[^[:L:][:M:]] > X;").transliterate("5ab e\u0301f")).toBe(
      "XabXe\u0301f",
    );
  });

  it("a nested bracket set without any POSIX class unions its members into the parent", () => {
    expect(RBT_JS.fromRules("[[ab]cd] > X;").transliterate("abcdez")).toBe("XXXXez");
  });

  it("a nested negated bracket set combines via De Morgan's law with the parent's own members", () => {
    expect(RBT_JS.fromRules("[[^ab]cd] > X;").transliterate("zabcde")).toBe("XabXXX");
  });

  it("negating an outer bracket that contains a single POSIX class is a valid, different way to negate it", () => {
    expect(RBT_JS.fromRules("[^[:M:]] > X;").transliterate("e\u0301")).toBe("X\u0301");
  });

  it("three-way combination: literal member, POSIX class, and nested bracket all unioned together", () => {
    expect(RBT_JS.fromRules("[z[:Lu:][ab]] > X;").transliterate("zAaBb c")).toBe("XXXXX c");
  });
});

describe("multi-character strings in sets: `[abc{de}f]`", () => {
  it.each([
    {
      name: "matches each single character member on its own",
      rules: "[abc{de}f] > X;",
      input: "abcf",
      expected: "XXXX",
    },
    {
      name: "matches the exact contiguous string as one atomic unit",
      rules: "[abc{de}f] > X;",
      input: "de",
      expected: "X",
    },
    {
      name: "a mix of single-character and string matches in one pass",
      rules: "[abc{de}f] > X;",
      input: "azdeg",
      expected: "XzXg",
    },
    {
      name: "the first half of the string alone does not match, since 'd' is not itself a member",
      rules: "[abc{de}f] > X;",
      input: "d",
      expected: "d",
    },
    {
      name: "the string does not match when not followed by its second character",
      rules: "[abc{de}f] > X;",
      input: "dx",
      expected: "dx",
    },
    {
      name: "the second half of the string alone does not match, since 'e' is not itself a member",
      rules: "[abc{de}f] > X;",
      input: "e",
      expected: "e",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  describe("the longest possible match always wins, matching ICU's own documented UnicodeSet matcher behavior", () => {
    it("a multi-character string is preferred over a shorter single-character member with the same prefix", () => {
      expect(RBT_JS.fromRules("[d{de}] > X;").transliterate("de")).toBe("X");
    });

    it("falls back to the single-character member when the string alternative does not apply here", () => {
      expect(RBT_JS.fromRules("[d{de}] > X;").transliterate("dx")).toBe("Xx");
    });

    it("this per-set preference does not extend into a cross-rule 'longest match wins' policy: which RULE fires is still decided purely by declaration order", () => {
      // Both rules below are individually capable of matching "de": the first rule's set
      // still internally prefers its own longer {de} alternative over a lone "d". But ICU's
      // RuleBasedTransliterator docs state plainly that "if multiple rules may match at some
      // point, the first matching rule is applied" - so it is declaration order, not either
      // rule's key length, that decides the winner here.
      expect(RBT_JS.fromRules("[{de}] > LONG; d > SHORT;").transliterate("de")).toBe("LONG");
      expect(RBT_JS.fromRules("[{de}] > LONG; d > SHORT;").transliterate("dx")).toBe("SHORTx");
      // Proof it's declaration order and not key length: swap which rule comes first and the
      // shorter, single-character rule now wins, even though "de" would satisfy the longer key.
      expect(RBT_JS.fromRules("d > SHORT; [{de}] > LONG;").transliterate("de")).toBe("SHORTe");
    });
  });

  it("a set may contain more than one multi-character string", () => {
    expect(RBT_JS.fromRules("[{ab}{cd}] > X;").transliterate("abcdxy")).toBe("XXxy");
  });

  it("a multi-character string may be longer than two characters", () => {
    expect(RBT_JS.fromRules("[{def}] > X;").transliterate("defg")).toBe("Xg");
  });

  it("works as an ante-context atom", () => {
    expect(RBT_JS.fromRules("[{de}]{f>g;").transliterate("defdf")).toBe("degdf");
  });

  it("works as a post-context atom", () => {
    expect(RBT_JS.fromRules("a}[{bc}]>X;").transliterate("abcabd")).toBe("Xbcabd");
  });

  it("existing character escapes (backslash and quoting) work inside the braces", () => {
    expect(RBT_JS.fromRules("[{d\\u0065}] > X;").transliterate("de")).toBe("X");
  });

  it("astral (surrogate-pair) characters are handled correctly inside a multi-character string", () => {
    expect(RBT_JS.fromRules("[{a\ud83d\udc4db}] > X;").transliterate("a\ud83d\udc4dbc")).toBe("Xc");
  });

  it("a nested bracket's own multi-character string is flattened into the parent set", () => {
    expect(RBT_JS.fromRules("[[{ab}]cd] > X;").transliterate("abcde")).toBe("XXXe");
  });

  it("combines with a POSIX class inside the same set", () => {
    expect(RBT_JS.fromRules("[{de}[:Lu:]] > X;").transliterate("deAb")).toBe("XXb");
  });

  it("can appear together with ante- and post-context in a single rule", () => {
    expect(RBT_JS.fromRules("x{[{de}]}y > Z;").transliterate("xdey xde")).toBe("xZy xde");
  });

  describe("negating a set containing multi-character strings drops the strings entirely, per ICU's documented 'code point complement' behavior (removeAllStrings)", () => {
    it.each([
      {
        name: "the dropped string no longer matches as a unit",
        rules: "[^abc{de}f] > X;",
        input: "de",
        expected: "XX",
      },
      {
        name: "the individual characters that made up the string are NOT excluded by the negation",
        rules: "[^abc{de}f] > X;",
        input: "d",
        expected: "X",
      },
      {
        name: "the single-character members are still correctly excluded",
        rules: "[^abc{de}f] > X;",
        input: "zabcf",
        expected: "Xabcf",
      },
      {
        name: "everything else still matches normally",
        rules: "[^abc{de}f] > X;",
        input: "z1 ",
        expected: "XXX",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });

  describe("malformed multi-character strings raise a clear parse error", () => {
    it.each([
      { name: "an empty '{}'", rules: "[{}] > X;" },
      { name: "an unterminated '{' with no closing '}'", rules: "[a{bc] > X;" },
    ])("$name", ({ rules }) => {
      expect(() => RBT_JS.fromRules(rules)).toThrow(RBTParseError);
    });
  });

  describe("the nine characters reserved when bare directly inside [...] (`| > ; ( ) ? + & $`) are all literal when written bare inside a {...} string here", () => {
    it.each([
      { name: "'|'", rules: "[{|}] > c;", input: "|", expected: "c" },
      { name: "'>'", rules: "[{>}] > c;", input: ">", expected: "c" },
      { name: "';'", rules: "[{;}] > c;", input: ";", expected: "c" },
      { name: "'('", rules: "[{(}] > c;", input: "(", expected: "c" },
      { name: "')'", rules: "[{)}] > c;", input: ")", expected: "c" },
      { name: "'?'", rules: "[{?}] > c;", input: "?", expected: "c" },
      { name: "'+'", rules: "[{+}] > c;", input: "+", expected: "c" },
      { name: "'&'", rules: "[{&}] > c;", input: "&", expected: "c" },
      { name: "'$'", rules: "[{$}] > c;", input: "$", expected: "c" },
    ])(
      "$name as a single-character {...} string is equivalent to that same character specified any other way",
      ({ rules, input, expected }) => {
        expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
      },
    );

    it("combines with a bare ordinary member and a real multi-character string in the same set, with the longest match still winning where they overlap", () => {
      expect(RBT_JS.fromRules("[|{&}{de}] > c;").transliterate(">|;()?+&de")).toBe(">c;()?+cc");
    });
  });
});

describe("quantifiers: `?`, `*`, `+`, and `(...)` grouping", () => {
  describe("`?` — zero or one", () => {
    it.each([
      {
        name: "matches when the optional element is absent",
        rules: "[ab]?c > X;",
        input: "c",
        expected: "X",
      },
      {
        name: "matches when the optional element is present once",
        rules: "[ab]?c > X;",
        input: "ac",
        expected: "X",
      },
      {
        name: "never consumes more than one occurrence",
        rules: "[ab]?c > X;",
        input: "abc",
        expected: "aX",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });

  describe("`*` — zero or more", () => {
    it.each([
      { name: "matches zero occurrences", rules: "[ab]*c > X;", input: "c", expected: "X" },
      {
        name: "matches a long contiguous run",
        rules: "[ab]*c > X;",
        input: "aabbc",
        expected: "X",
      },
      {
        name: "is greedy: consumes the longest contiguous run",
        rules: "[ab]* > X;",
        input: "aabbc",
        expected: "XXc",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });

    it("as a standalone key, `*` vacuously matches every remaining gap once its greedy run ends, exactly like a real regex engine's global replace with a nullable pattern", () => {
      expect(RBT_JS.fromRules("[ab]* > X;").transliterate("cde")).toBe("XcXdXe");
      expect(RBT_JS.fromRules("[ab]* > X;").transliterate("c")).toBe("Xc");
    });
  });

  describe("`+` — one or more", () => {
    it.each([
      { name: "does not match zero occurrences", rules: "[ab]+c > X;", input: "c", expected: "c" },
      { name: "matches exactly one occurrence", rules: "[ab]+c > X;", input: "ac", expected: "X" },
      {
        name: "matches a long contiguous run",
        rules: "[ab]+c > X;",
        input: "aabbc",
        expected: "X",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });

  describe("`(...)` grouping", () => {
    it("an unquantified group behaves identically to its contents written inline", () => {
      expect(RBT_JS.fromRules("(ab) > X;").transliterate("ab")).toBe("X");
    });

    it.each([
      {
        name: "(ab)+ matches a single repetition",
        rules: "(ab)+ > X;",
        input: "ab",
        expected: "X",
      },
      {
        name: "(ab)+ matches several repetitions as one unit",
        rules: "(ab)+ > X;",
        input: "ababab",
        expected: "X",
      },
      {
        name: "(ab)+ requires a full repetition; a partial trailing one does not count",
        rules: "(ab)+ > X;",
        input: "aba",
        expected: "Xa",
      },
      { name: "(ab)* matches zero repetitions", rules: "(ab)*c > X;", input: "c", expected: "X" },
      {
        name: "(ab)? never matches more than one repetition",
        rules: "(ab)?c > X;",
        input: "ababc",
        expected: "abX",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });

    it("groups may be nested to any depth", () => {
      expect(RBT_JS.fromRules("((ab)+c)* > X;").transliterate("abcababc")).toBe("X");
    });
  });

  describe("quantifiers and groups work in ante- and post-context too, via the same backward/forward matching used for a single atom", () => {
    it("a quantified group as ante-context", () => {
      expect(RBT_JS.fromRules("(ab)+{c>Z;").transliterate("ababc")).toBe("ababZ");
      expect(RBT_JS.fromRules("(ab)+{c>Z;").transliterate("abac")).toBe("abac");
    });

    it("a quantified group as ante-context, zero-or-more variant", () => {
      expect(RBT_JS.fromRules("(ab)*{c>Z;").transliterate("c")).toBe("Z");
    });

    it("`?` as ante-context", () => {
      expect(RBT_JS.fromRules("x?{c>Z;").transliterate("xc")).toBe("xZ");
      expect(RBT_JS.fromRules("x?{c>Z;").transliterate("c")).toBe("Z");
    });
  });

  it("a multi-character string set member can itself be quantified", () => {
    expect(RBT_JS.fromRules("[{de}]+ > X;").transliterate("dedede")).toBe("X");
  });

  it("a quantified key that would greedily consume more text still only wins because it was declared first - not because its match is longer", () => {
    expect(RBT_JS.fromRules("[ab]+ > LONG; a > SHORT;").transliterate("aab")).toBe("LONG");
    // Reverse the declaration order and the plain, single-character rule wins instead, one
    // character at a time, even though "[ab]+" could have greedily matched "aa" as a unit.
    // ICU does not compare candidate rules by how much they'd consume; whichever rule is
    // declared first and matches at the cursor is applied immediately.
    expect(RBT_JS.fromRules("a > SHORT; [ab]+ > LONG;").transliterate("aab")).toBe(
      "SHORTSHORTLONG",
    );
  });

  describe("ICU transliterator quantifiers are greedy with no backtracking (this engine follows ICU's own documented behavior here: 'only greedy quantifiers, no backup')", () => {
    it("a greedy `*` that over-consumes does not backtrack to let a later, overlapping atom match, even though a less-greedy match would have succeeded", () => {
      expect(RBT_JS.fromRules("[abc]*[abc] > X;").transliterate("abc")).toBe("abc");
    });

    it("contrast: this is not a problem when the trailing atom does not overlap with what the quantifier can match", () => {
      expect(RBT_JS.fromRules("[abc]*d > X;").transliterate("abcd")).toBe("X");
    });
  });

  describe("a key that can match with zero width via a quantifier does not degenerate into an infinite insertion loop", () => {
    it("the default (no explicit `|`) cursor advance is forced past at least one real character after a zero-width match, exactly as it already was for the pre-existing zero-width anchor feature", () => {
      expect(RBT_JS.fromRules("[ab]* > X;").transliterate("cde")).toBe("XcXdXe");
    });

    it("an explicit `|` that pins the cursor in place is still caught by the step-budget guard, since that safety net is unrelated to the automatic-advance fix above", () => {
      expect(() => RBT_JS.fromRules("[ab]* >| ;").transliterate("c")).toThrow(RBTRuntimeError);
    });

    it("the same thing happens with a quantified '$' (see AETHER_ATOM), and for the same reason: '?' and '*' both fall back to a zero-width success when the atom underneath can't match for real, and '$' can never match for real at any position", () => {
      expect(RBT_JS.fromRules("$? > c;").transliterate("ab")).toBe("cacb");
      expect(RBT_JS.fromRules("$* > c;").transliterate("ab")).toBe("cacb");
    });

    it("by contrast, '+' requires at least one real occurrence, which '$' can never provide, so a quantified '$+' never matches at all — unlike '?' and '*' above", () => {
      expect(RBT_JS.fromRules("$+ > c;").transliterate("ab")).toBe("ab");
    });
  });

  describe("malformed quantifier/group syntax raises a clear parse error", () => {
    it.each([
      { name: "a quantifier with nothing before it", rules: "* > X;" },
      { name: "an unmatched closing ')'", rules: "a) > X;" },
      { name: "an unterminated '(' group", rules: "(ab > X;" },
      { name: "two quantifiers in a row", rules: "a?? > X;" },
    ])("$name", ({ rules }) => {
      expect(() => RBT_JS.fromRules(rules)).toThrow(RBTParseError);
    });
  });

  it("the exact worked example from the prompt", () => {
    const rules =
      "\u0254 } ([k\u0261\u014b{t\u0283}{d\u0292}\u0288\u0256\u027d\u0288tdnpbmjrl\u0283h] [\u02b0\u02b1\u031e]*)+ [iu] > o;";
    expect(RBT_JS.fromRules(rules).transliterate("\u0254ki")).toBe("oki");
    expect(RBT_JS.fromRules(rules).transliterate("\u0254kpu")).toBe("okpu");
    expect(RBT_JS.fromRules(rules).transliterate("\u0254t\u0283i")).toBe("ot\u0283i");
    expect(RBT_JS.fromRules(rules).transliterate("\u0254k\u02b0i")).toBe("ok\u02b0i");
    expect(RBT_JS.fromRules(rules).transliterate("\u0254ka")).toBe("\u0254ka");
    expect(RBT_JS.fromRules(rules).transliterate("\u0254i")).toBe("\u0254i");
  });
});

describe("capturing groups, backreferences, and inline transliterator function calls", () => {
  it("the exact worked example from the prompt: delete-and-capitalize", () => {
    const rules = "H ([:L:]) >| &Any-Upper($1);";
    expect(RBT_JS.fromRules(rules).transliterate("Ha")).toBe("A");
    expect(RBT_JS.fromRules(rules).transliterate("xHay")).toBe("xAy");
  });

  it("the `|` cursor placement lets a subsequent rule immediately target the newly produced uppercase letter", () => {
    expect(RBT_JS.fromRules("H ([:L:]) >| &Any-Upper($1); A > Z;").transliterate("Ha")).toBe("Z");
  });

  it("contrast: without `|`, the cascaded rule does not get a chance in the same pass", () => {
    expect(RBT_JS.fromRules("H ([:L:]) > &Any-Upper($1); A > Z;").transliterate("Ha")).toBe("A");
  });

  describe("`$N` backreferences can be used directly in the replacement, without a function call", () => {
    it.each([
      {
        name: "a backreference re-emits exactly what its group captured",
        rules: "x(yz)w > $1;",
        input: "xyzw",
        expected: "yz",
      },
      {
        name: "a backreference can be repeated",
        rules: "(ab) > $1$1;",
        input: "ab",
        expected: "abab",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });

  describe("multiple capture groups are numbered left to right by their opening '('", () => {
    it("two sibling groups, referenced out of order", () => {
      expect(RBT_JS.fromRules("(a)(b) > $2$1;").transliterate("ab")).toBe("ba");
    });

    it("nested groups: the outer group gets the lower number", () => {
      expect(RBT_JS.fromRules("((a)(b)) > $1-$2-$3;").transliterate("ab")).toBe("ab-a-b");
    });
  });

  it("`&Any-Lower(...)` lowercases the captured text", () => {
    expect(RBT_JS.fromRules("H ([:L:]) > &Any-Lower($1);").transliterate("HA")).toBe("a");
  });

  it("a function's argument can mix literal text with backreferences", () => {
    expect(RBT_JS.fromRules("(a) > &Any-Upper(x$1y);").transliterate("a")).toBe("XAY");
  });

  it("function calls can be nested inside another function call's argument", () => {
    expect(RBT_JS.fromRules("(a) > &Any-Upper(&Any-Lower($1));").transliterate("A")).toBe("A");
  });

  it("a quantified group's capture reflects only its last repetition", () => {
    expect(RBT_JS.fromRules("(ab)+ > '['$1']';").transliterate("ababab")).toBe("[ab]");
  });

  it("a failed final repetition of a quantified group must not corrupt an inner group's capture from the repetitions that did succeed", () => {
    expect(RBT_JS.fromRules("((a)(b))+(c) > $2-$3;").transliterate("ababc")).toBe("a-b");
  });

  describe("capture groups work in ante- and post-context too, using the same backward/forward matching as everywhere else", () => {
    it("a captured group from ante-context, referenced verbatim (ante text itself is never modified)", () => {
      expect(RBT_JS.fromRules("(x){a > $1;").transliterate("xa")).toBe("xx");
    });

    it("a captured group from ante-context, passed through a function", () => {
      expect(RBT_JS.fromRules("(h){a > &Any-Upper($1);").transliterate("ha")).toBe("hH");
    });

    it("a captured group from post-context, referenced verbatim (post text itself is never modified)", () => {
      expect(RBT_JS.fromRules("a}(x) > $1;").transliterate("ax")).toBe("xx");
    });

    it("a captured group from post-context, passed through a function", () => {
      expect(RBT_JS.fromRules("a}(h) > &Any-Upper($1);").transliterate("ah")).toBe("Hh");
    });
  });

  it("a backreference to a group that never matched (inside an unmatched `?`) resolves to empty text", () => {
    expect(RBT_JS.fromRules("(x)?a > '['$1']';").transliterate("a")).toBe("[]");
  });

  describe("malformed capture/backreference/function syntax raises a clear parse error", () => {
    it.each([
      { name: "an unknown inline function name", rules: "(a) > &Any-Title($1);" },
      {
        name: "a backreference to a group number that does not exist in this rule",
        rules: "(a) > $2;",
      },
      { name: "'$' with no digits after it", rules: "a > $;" },
      { name: "an unterminated function call, missing ')'", rules: "(a) > &Any-Upper($1;" },
      {
        name: "'|' cursor placement is not allowed inside a function argument",
        rules: "(a) > &Any-Upper($1|);",
      },
    ])("$name", ({ rules }) => {
      expect(() => RBT_JS.fromRules(rules)).toThrow(RBTParseError);
    });
  });
});

describe("combinations across features", () => {
  describe("quantifiers combined with character-class features", () => {
    it.each([
      {
        name: "[:L:]+ matches a run of letters, POSIX class combined with '+'",
        rules: "[:L:]+ > X;",
        input: "abc123",
        expected: "X123",
      },
      {
        name: "[:L:]* matches zero letters, POSIX class combined with '*'",
        rules: "[:L:]*1 > X;",
        input: "1",
        expected: "X",
      },
      {
        name: "[:Lu:]+ matches only a consecutive uppercase run",
        rules: "[:Lu:]+ > X;",
        input: "ABCdef",
        expected: "Xdef",
      },
      {
        name: "[^abc]+ matches a run of non-members, negation combined with '+'",
        rules: "[^abc]+ > X;",
        input: "xyzabc",
        expected: "Xabc",
      },
      {
        name: "[^abc]* matches zero characters when the next position is already excluded",
        rules: "[^abc]*a > X;",
        input: "a",
        expected: "X",
      },
      {
        name: "[{de}]* matches zero repetitions of a multi-character string",
        rules: "[{de}]*f > X;",
        input: "f",
        expected: "X",
      },
      {
        name: "[a{bc}]+ combines a literal member and a string member under '+'",
        rules: "[a{bc}]+ > X;",
        input: "abcabcz",
        expected: "Xz",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });

  describe("capture groups combined with quantifiers, character classes, and escapes", () => {
    it.each([
      {
        name: "captures a variable-length run matched by a quantified POSIX class",
        rules: "([:L:]+) > '['$1']';",
        input: "abc123",
        expected: "[abc]123",
      },
      {
        name: "a '*'-quantified group can capture an empty string when it matches zero times",
        rules: "(a*)b > '['$1']';",
        input: "b",
        expected: "[]",
      },
      {
        name: "the same group captures normally when the '*' does match",
        rules: "(a*)b > '['$1']';",
        input: "aaab",
        expected: "[aaa]",
      },
      {
        name: "captures a run matched by a quantified negated set",
        rules: "([^abc]+) > '['$1']';",
        input: "xyzabc",
        expected: "[xyz]abc",
      },
      {
        name: "captures a group whose content is a quantified multi-character-string set, last repetition only",
        rules: "([{de}])+ > '['$1']';",
        input: "dedede",
        expected: "[de]",
      },
      {
        name: "captures a single backslash-escaped literal character repeated by '+'",
        rules: "(\\.)+ > '['$1']';",
        input: "...",
        expected: "[.]",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });

    it("a bare '{...}' directly inside a group (not wrapped in '[...]') is a clear parse error, since multi-character strings are a UnicodeSet-only construct, not a general grouping construct", () => {
      expect(() => RBT_JS.fromRules("({de})+ > X;")).toThrow(RBTParseError);
    });

    it("when several groups appear together and only some of them match, the unmatched ones resolve to empty text while the matched ones resolve normally", () => {
      expect(RBT_JS.fromRules("(x)?(a) > '['$1']['$2']';").transliterate("a")).toBe("[][a]");
    });

    it("an unmatched capturing group passed through an inline function resolves to an empty argument rather than an error", () => {
      expect(RBT_JS.fromRules("(x)?a > &Any-Upper($1);").transliterate("a")).toBe("");
    });

    it("an entirely empty function-call argument is valid syntax and resolves to empty text", () => {
      expect(RBT_JS.fromRules("a > &Any-Upper();").transliterate("a")).toBe("");
    });

    it("the same captured group can be passed through two different inline functions in one replacement", () => {
      expect(RBT_JS.fromRules("(a) > &Any-Upper($1)' '&Any-Lower($1);").transliterate("a")).toBe(
        "A a",
      );
    });

    it("multiple levels of nested, independently quantified groups all capture correctly at once", () => {
      expect(RBT_JS.fromRules("((a+)(b*)c?)+ > $1'|'$2'|'$3;").transliterate("aabbc")).toBe(
        "aabbc|aa|bb",
      );
    });
  });

  describe("whitespace tolerance around the newer syntax follows the same rule as everywhere else in the grammar, with two intentional tight-token exceptions", () => {
    it.each([
      {
        name: "whitespace around a quantifier symbol is ignored",
        rules: "[ab] * > X;",
        input: "aabb",
        expected: "X",
      },
      {
        name: "whitespace around group parentheses and their quantifier is ignored",
        rules: "( a b ) + > X;",
        input: "abab",
        expected: "X",
      },
      {
        name: "whitespace between a function name and its opening '(' is ignored, as is whitespace around the argument",
        rules: "(a) > &Any-Upper ( $1 );",
        input: "a",
        expected: "A",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });

    it.each([
      {
        name: "'$' followed by whitespace then digits is NOT tolerated; '$1' must be written tight",
        rules: "(a) > $ 1;",
      },
      {
        name: "'&' followed by whitespace then a function name is NOT tolerated; '&Name' must be written tight",
        rules: "(a) > & Any-Upper($1);",
      },
    ])("$name", ({ rules }) => {
      expect(() => RBT_JS.fromRules(rules)).toThrow(RBTParseError);
    });
  });

  describe("rule precedence remains correct once quantifiers and groups are in the mix", () => {
    it("a quantified group that matches more text still only wins because it is declared first, not because its match is longer", () => {
      expect(RBT_JS.fromRules("(ab)+ > LONG; a > SHORT;").transliterate("abab")).toBe("LONG");
      // Reversed order: the plain rule now wins each time it applies, since it is checked
      // first, even though "(ab)+" would have matched a longer run starting from an "a".
      expect(RBT_JS.fromRules("a > SHORT; (ab)+ > LONG;").transliterate("abab")).toBe(
        "SHORTbSHORTb",
      );
    });

    it("declaration order is absolute: even a vacuous, zero-width match from an earlier rule pre-empts a real match a later rule would have made at the same position", () => {
      // "(ab)*" can match zero repetitions - a valid, empty match - and per ICU that still
      // counts as "the first matching rule" if it is declared first. It fires (inserting
      // "LONG" and leaving "x" untouched), so "x > SHORT;" never gets a chance to run here.
      expect(RBT_JS.fromRules("(ab)* > LONG; x > SHORT;").transliterate("x")).toBe("LONGx");
      // With the order swapped, "x > SHORT;" is checked first, matches for real, and wins.
      expect(RBT_JS.fromRules("x > SHORT; (ab)* > LONG;").transliterate("x")).toBe("SHORT");
    });
  });

  it("captures from an earlier pass do not leak into a later pass, even when that pass declares different, unrelated capture groups", () => {
    expect(RBT_JS.fromRules("(a)(b) > $2$1; ::Null; (x) > '['$1']';").transliterate("abx")).toBe(
      "ba[x]",
    );
  });

  it("a semantic global transform between two separate capturing rules does not disturb either rule's own captures", () => {
    expect(RBT_JS.fromRules("(A)(B) > $2$1; ::Lower; (x)(y) > $2$1;").transliterate("ABxy")).toBe(
      "bayx",
    );
  });
});

describe("cursor placement with `>|`", () => {
  it("rescans the freshly produced text in the same cycle, letting a second rule cascade immediately", () => {
    expect(RBT_JS.fromRules("a >| b; b > c;").transliterate("a")).toBe("c");
  });

  it("contrast: without `|`, the cascaded rule does not get a chance in the same pass", () => {
    expect(RBT_JS.fromRules("a > b; b > c;").transliterate("a")).toBe("b");
  });

  it("`|` may sit anywhere inside the replacement, not only right after `>`", () => {
    expect(RBT_JS.fromRules("a > bc|d; d > e;").transliterate("a")).toBe("bce");
  });

  it("used on its own, `|` just leaves the produced text in place once no further rule matches it", () => {
    expect(RBT_JS.fromRules("a >| b;").transliterate("banana")).toBe("bbnbnb");
  });
});

describe("multi-pass architecture via `::` directives", () => {
  it.each([
    {
      name: "`::Null;` forces a fresh pass so a cascaded rule fires",
      rules: "a > b; ::Null; b > c;",
      input: "a",
      expected: "c",
    },
    {
      name: "any `::Identifier;` directive is at least a structural boundary, even ones this build does not implement semantically",
      rules: "a > b; ::Any-Latin; b > c;",
      input: "a",
      expected: "c",
    },
    {
      name: "three passes chain correctly",
      rules: "a > b; ::Null; b > c; ::Null; c > d;",
      input: "a",
      expected: "d",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  it("without a directive, rules stay in one pass and the cursor simply keeps moving forward", () => {
    expect(RBT_JS.fromRules("a > b; b > c;").transliterate("ba")).toBe("cb");
  });

  it("contrast: `::Lower;` is one of the four directives with real semantics, so it actually transforms the buffer mid-pipeline", () => {
    expect(RBT_JS.fromRules("a > B; ::Lower; b > X;").transliterate("a")).toBe("X");
  });
});

describe("ICU semantic global transforms: `::Lower;`, `::Title;`, `::NFC;`, `::NFD;`", () => {
  describe("`::Lower;` — Unicode default lowercasing, locale-aware", () => {
    it.each([
      {
        name: "lowercases plain ASCII",
        rules: "::Lower;",
        input: "HELLO World 123",
        expected: "hello world 123",
      },
      {
        name: "lowercases accented Latin letters",
        rules: "::Lower;",
        input: "CAF\u00c9",
        expected: "caf\u00e9",
      },
      {
        name: "applies the context-sensitive Greek final-sigma rule (last \u03a3 becomes \u03c2, not \u03c3), proving this is real Unicode case mapping and not a naive per-character table",
        rules: "::Lower;",
        input: "\u039f\u0394\u03a5\u03a3\u03a3\u0395\u03a5\u03a3",
        expected: "\u03bf\u03b4\u03c5\u03c3\u03c3\u03b5\u03c5\u03c2",
      },
      {
        name: "an already-lowercase string is unchanged",
        rules: "::Lower;",
        input: "already lower",
        expected: "already lower",
      },
      { name: "an empty string is unchanged", rules: "::Lower;", input: "", expected: "" },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });

  describe("`::Title;` — Unicode word-segmented title casing, locale-aware", () => {
    it.each([
      {
        name: "capitalizes the first letter of each word and lowercases the rest",
        rules: "::Title;",
        input: "the quick brown fox",
        expected: "The Quick Brown Fox",
      },
      {
        name: "lowercases the remainder of a word even if it started fully uppercase",
        rules: "::Title;",
        input: "THE QUICK BROWN FOX",
        expected: "The Quick Brown Fox",
      },
      {
        name: "preserves punctuation and run-length of whitespace between words",
        rules: "::Title;",
        input: "hello,  world!",
        expected: "Hello,  World!",
      },
      {
        name: "treats hyphen-separated segments as separate words",
        rules: "::Title;",
        input: "state-of-the-art",
        expected: "State-Of-The-Art",
      },
      {
        name: "an apostrophe joins letters into a single word-boundary token, so only the very first character is capitalized (basic ICU/UAX#29 behavior, not English style-guide rules)",
        rules: "::Title;",
        input: "o'briens",
        expected: "O'briens",
      },
      {
        name: "digits participate in word-like segments and are unaffected by case mapping",
        rules: "::Title;",
        input: "item2 costs $5",
        expected: "Item2 Costs $5",
      },
      {
        name: "non-word symbols such as emoji pass through untouched",
        rules: "::Title;",
        input: "hello \ud83d\udc4b world",
        expected: "Hello \ud83d\udc4b World",
      },
      {
        name: "works on non-Latin cased scripts (Cyrillic)",
        rules: "::Title;",
        input: "\u043f\u0440\u0438\u0432\u0435\u0442 \u043c\u0438\u0440",
        expected: "\u041f\u0440\u0438\u0432\u0435\u0442 \u041c\u0438\u0440",
      },
      {
        name: "a punctuation-only string has no word-like segments and is unchanged",
        rules: "::Title;",
        input: "...",
        expected: "...",
      },
      { name: "an empty string is unchanged", rules: "::Title;", input: "", expected: "" },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });

  describe("`::NFC;` / `::NFD;` — Unicode normalization via String.prototype.normalize()", () => {
    it("`::NFC;` composes a decomposed base+combining-mark sequence into a single precomposed character", () => {
      const decomposed = "cafe\u0301";
      expect(decomposed.length).toBe(5);
      expect(RBT_JS.fromRules("::NFC;").transliterate(decomposed)).toBe("caf\u00e9");
    });

    it("`::NFD;` decomposes a precomposed character into its base letter plus a combining mark", () => {
      const composed = "caf\u00e9";
      expect(composed.length).toBe(4);
      expect(RBT_JS.fromRules("::NFD;").transliterate(composed)).toBe("cafe\u0301");
    });

    it("`::NFC;` is idempotent on text that is already fully composed", () => {
      expect(RBT_JS.fromRules("::NFC;").transliterate("caf\u00e9")).toBe("caf\u00e9");
    });

    it("`::NFD;` is idempotent on text that is already fully decomposed", () => {
      expect(RBT_JS.fromRules("::NFD;").transliterate("cafe\u0301")).toBe("cafe\u0301");
    });

    it("an empty string is unchanged by either normalization", () => {
      expect(RBT_JS.fromRules("::NFC;").transliterate("")).toBe("");
      expect(RBT_JS.fromRules("::NFD;").transliterate("")).toBe("");
    });
  });

  describe("interoperability: a semantic transform pass genuinely changes what surrounding rule passes can match", () => {
    it("::NFC; composes text produced by an earlier rule pass, exposing it to a later rule that only matches the precomposed character", () => {
      expect(RBT_JS.fromRules("a > e\u0301; ::NFC; \u00e9 > X;").transliterate("a")).toBe("X");
    });

    it("::NFD; decomposes precomposed input, exposing its base letter to a rule that could not otherwise see it", () => {
      expect(RBT_JS.fromRules("::NFD; e > E;").transliterate("caf\u00e9")).toBe("cafE\u0301");
    });
  });

  describe("scope boundary: directives that are not one of these four names remain purely structural", () => {
    it.each([
      {
        name: "`::Upper;` is NOT implemented despite the suggestive name — no case change happens",
        rules: "::Upper;",
        input: "hello",
        expected: "hello",
      },
      {
        name: "directive names are matched case-sensitively — `::lower;` (wrong case) is not recognized as `::Lower;`",
        rules: "::lower;",
        input: "HELLO",
        expected: "HELLO",
      },
      {
        name: "`::Null;` still performs no transformation of its own",
        rules: "::Null;",
        input: "HELLO",
        expected: "HELLO",
      },
    ])("$name", ({ rules, input, expected }) => {
      expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
    });
  });
});

describe("post-context: `a } b > c;`", () => {
  it("matches the key only when the post-context follows, and leaves the post-context text unmodified in the buffer", () => {
    expect(RBT_JS.fromRules("a } b > c;").transliterate("ab")).toBe("cb");
  });

  it.each([
    {
      name: "does not fire when the wrong character follows",
      rules: "a } b > c;",
      input: "ax",
      expected: "ax",
    },
    {
      name: "does not fire at the very end of the string (no follower at all)",
      rules: "a } b > c;",
      input: "a",
      expected: "a",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });
});

describe("ante-context: `a { b > c;`", () => {
  it("matches the key only when the ante-context precedes, and leaves the ante-context text unmodified in the buffer", () => {
    expect(RBT_JS.fromRules("a { b > c;").transliterate("ab")).toBe("ac");
  });

  it.each([
    {
      name: "does not fire when the wrong character precedes",
      rules: "a { b > c;",
      input: "xb",
      expected: "xb",
    },
    {
      name: "does not fire at the very start of the string (no predecessor at all)",
      rules: "a { b > c;",
      input: "b",
      expected: "b",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });

  it("can see text produced earlier in the same pass", () => {
    expect(RBT_JS.fromRules("a > x; x{b}>c;").transliterate("ab")).toBe("xc");
  });
});

// ICU's RuleBasedTransliterator documentation states plainly: "If multiple rules may match
// at some point, the first matching rule is applied." Unlike a regex engine hunting for the
// longest overall match, ICU does not auto-sort rules by length or specificity - it is the
// rule author's job to place specific/longer rules before general/shorter fallback rules if
// that's the precedence they want. Every pair of cases below holds key length, context, or
// specificity constant across two declaration orders to show that only the order changes the
// outcome. (ICU *does* use longest-match logic in two other, narrower places - a single
// UnicodeSet's own string alternatives, covered above, and charset conversion tables, which
// this engine doesn't implement - but neither of those is "the order rules are declared in".)
describe("rule precedence when several rules could match at the same position", () => {
  it.each([
    {
      name: "the first declared rule wins even when a later rule's key would match more text",
      rules: "c > C; ch > CH;",
      input: "ch",
      expected: "Ch",
    },
    {
      name: "declaring the longer, more specific rule first is how you make it take priority instead",
      rules: "ch > CH; c > C;",
      input: "ch",
      expected: "CH",
    },
    {
      name: "a context-free rule wins immediately when declared first, even though a later rule is more specific about its surroundings",
      rules: "a > X; a } b > Y;",
      input: "ab",
      expected: "Xb",
    },
    {
      name: "declaring the context-requiring rule first instead lets it correctly take priority over the context-free fallback",
      rules: "a } b > Y; a > X;",
      input: "ab",
      expected: "Yb",
    },
    {
      name: "with two otherwise-identical rules, the earlier declaration wins",
      rules: "a > X; a > Y;",
      input: "a",
      expected: "X",
    },
    {
      name: "a rule whose key starts with a zero-width anchor atom still only wins because it is declared first, not because it has more atoms",
      rules: "[:^L:]a > B; a > A;",
      input: "a",
      expected: "B",
    },
    {
      name: "the same zero-width-anchor rule loses to an earlier, shorter rule once reordered, just like any other rule would",
      rules: "a > A; [:^L:]a > B;",
      input: "a",
      expected: "A",
    },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });
});

describe("parse and runtime errors are raised clearly for malformed input", () => {
  it.each([
    {
      name: "an unterminated '[' character set",
      fn: () => RBT_JS.fromRules("[abc"),
      errorClass: RBTParseError,
      mustInclude: "unterminated",
    },
    {
      name: "a second '{' in the same rule",
      fn: () => RBT_JS.fromRules("a{b{c}>d;"),
      errorClass: RBTParseError,
      mustInclude: "at most one '{'",
    },
    {
      name: "a rule missing its terminating ';'",
      fn: () => RBT_JS.fromRules("a > b"),
      errorClass: RBTParseError,
      mustInclude: "missing ';'",
    },
    {
      name: "a rule with an empty key",
      fn: () => RBT_JS.fromRules("a{}>b;"),
      errorClass: RBTParseError,
      mustInclude: "empty key",
    },
    {
      name: "a `|` placement that never makes forward progress, instead of hanging forever",
      fn: () => RBT_JS.fromRules("a >| a;").transliterate("a"),
      errorClass: RBTRuntimeError,
      mustInclude: "step budget",
    },
  ])("$name", ({ fn, errorClass, mustInclude }) => {
    expect(fn).toThrow(errorClass);
    expect(fn).toThrow(mustInclude);
  });
});

describe("additional edge cases worth documenting", () => {
  it.each([
    {
      name: "ante/post context can be more than one character",
      rules: "xy{ab}zw>Q;",
      input: "xyabzw",
      expected: "xyQzw",
    },
    {
      name: "astral (surrogate-pair) characters, e.g. emoji, are handled as single atoms",
      rules: "👍 > 👎;",
      input: "a👍b",
      expected: "a👎b",
    },
    {
      name: "an astral character can be a [set] member",
      rules: "[a👍c] > X;",
      input: "a👍c",
      expected: "XXX",
    },
    {
      name: "quoting lets structural characters appear literally in a replacement",
      rules: "a > '{' 'b' '}';",
      input: "a",
      expected: "{b}",
    },
    {
      name: "quoting lets a literal '{' appear as a key",
      rules: "'{' > X;",
      input: "{",
      expected: "X",
    },
    {
      name: "a rule set consisting only of a directive is a harmless no-op",
      rules: "::Null;",
      input: "hello",
      expected: "hello",
    },
    { name: "an empty rule source is a no-op", rules: "", input: "hello", expected: "hello" },
    { name: "matching is case-sensitive by default", rules: "a > X;", input: "aA", expected: "XA" },
  ])("$name", ({ rules, input, expected }) => {
    expect(RBT_JS.fromRules(rules).transliterate(input)).toBe(expected);
  });
});

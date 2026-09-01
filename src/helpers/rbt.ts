export class RBTParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RBTParseError";
  }
}

export class RBTRuntimeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RBTRuntimeError";
  }
}

export interface CharAtom {
  kind: "char";
  value: string;
}

export interface SetAtom {
  kind: "set";
  alternatives: string[][];
  charTests: Array<(ch: string) => boolean>;
  matchesStartOfString: boolean;
  matchesEndOfString: boolean;
}

export type MatchAtom = CharAtom | SetAtom;

export type Quantifier = "one" | "optional" | "star" | "plus";

export type PatternNode =
  | { kind: "atom"; atom: MatchAtom; quantifier: Quantifier }
  | { kind: "group"; nodes: PatternNode[]; quantifier: Quantifier; captureIndex: number };

export type InlineFunctionName = "Any-Upper" | "Any-Lower";

export type ReplacementSegment =
  | { kind: "literal"; value: string }
  | { kind: "backref"; index: number }
  | { kind: "call"; name: InlineFunctionName; args: ReplacementSegment[] };

export interface CompiledRule {
  ante: PatternNode[];
  key: PatternNode[];
  post: PatternNode[];
  replacement: ReplacementSegment[];
  cursorOffset: number | null;
  source: string;
}

export type GlobalTransformName = "Lower" | "Title" | "NFC" | "NFD";

export type CompiledPass =
  { kind: "rules"; rules: CompiledRule[] } | { kind: "transform"; name: GlobalTransformName };

interface PosixClassSpec {
  test: (ch: string) => boolean;
  matchesStartOfString: boolean;
  matchesEndOfString: boolean;
}

function makeCharTest(pattern: string): (ch: string) => boolean {
  const re = new RegExp(`^(?:${pattern})$`, "u");
  return (ch: string) => re.test(ch);
}

function makeRangeTest(startCodepoint: number, endCodepoint: number): (ch: string) => boolean {
  return (ch: string) => {
    const cp = ch.codePointAt(0);
    return cp !== undefined && cp >= startCodepoint && cp <= endCodepoint;
  };
}

const POSIX_CLASSES: Readonly<Record<string, PosixClassSpec>> = {
  M: { test: makeCharTest("\\p{M}"), matchesStartOfString: false, matchesEndOfString: false },
  "^M": { test: makeCharTest("\\P{M}"), matchesStartOfString: true, matchesEndOfString: true },
  Mn: { test: makeCharTest("\\p{Mn}"), matchesStartOfString: false, matchesEndOfString: false },
  "^Mn": { test: makeCharTest("\\P{Mn}"), matchesStartOfString: true, matchesEndOfString: true },
  Lu: { test: makeCharTest("\\p{Lu}"), matchesStartOfString: false, matchesEndOfString: false },
  "^Lu": { test: makeCharTest("\\P{Lu}"), matchesStartOfString: true, matchesEndOfString: true },
  Ll: { test: makeCharTest("\\p{Ll}"), matchesStartOfString: false, matchesEndOfString: false },
  "^Ll": { test: makeCharTest("\\P{Ll}"), matchesStartOfString: true, matchesEndOfString: true },
  L: { test: makeCharTest("\\p{L}"), matchesStartOfString: false, matchesEndOfString: false },
  "^L": { test: makeCharTest("\\P{L}"), matchesStartOfString: true, matchesEndOfString: true },
  Han: {
    test: makeCharTest("\\p{scx=Han}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Han": {
    test: makeCharTest("\\P{scx=Han}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Hiragana: {
    test: makeCharTest("\\p{scx=Hiragana}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Hiragana": {
    test: makeCharTest("\\P{scx=Hiragana}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Katakana: {
    test: makeCharTest("\\p{scx=Katakana}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Katakana": {
    test: makeCharTest("\\P{scx=Katakana}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Hangul: {
    test: makeCharTest("\\p{scx=Hangul}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Hangul": {
    test: makeCharTest("\\P{scx=Hangul}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Devanagari: {
    test: makeCharTest("\\p{scx=Devanagari}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Devanagari": {
    test: makeCharTest("\\P{scx=Devanagari}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Bengali: {
    test: makeCharTest("\\p{scx=Bengali}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Bengali": {
    test: makeCharTest("\\P{scx=Bengali}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Arabic: {
    test: makeCharTest("\\p{scx=Arabic}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Arabic": {
    test: makeCharTest("\\P{scx=Arabic}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Hebrew: {
    test: makeCharTest("\\p{scx=Hebrew}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Hebrew": {
    test: makeCharTest("\\P{scx=Hebrew}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Georgian: {
    test: makeCharTest("\\p{scx=Georgian}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Georgian": {
    test: makeCharTest("\\P{scx=Georgian}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Armenian: {
    test: makeCharTest("\\p{scx=Armenian}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Armenian": {
    test: makeCharTest("\\P{scx=Armenian}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Greek: {
    test: makeCharTest("\\p{scx=Greek}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Greek": {
    test: makeCharTest("\\P{scx=Greek}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Cyrillic: {
    test: makeCharTest("\\p{scx=Cyrillic}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Cyrillic": {
    test: makeCharTest("\\P{scx=Cyrillic}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
  Latin: {
    test: makeCharTest("\\p{scx=Latin}"),
    matchesStartOfString: false,
    matchesEndOfString: false,
  },
  "^Latin": {
    test: makeCharTest("\\P{scx=Latin}"),
    matchesStartOfString: true,
    matchesEndOfString: true,
  },
};

const STRUCTURAL_CHARS = new Set([
  "{",
  "}",
  ">",
  "|",
  "[",
  "]",
  ";",
  "(",
  ")",
  "?",
  "*",
  "+",
  "&",
  "$",
]);

// Characters that '\X' turns into a literal X anywhere in the grammar
// (pattern, replacement, inside '[...]', inside '{...}'), and that are also
// literal when written bare - without a backslash - inside a '{...}'
// multi-character string. The only characters excluded from this list are
// '{ } [ ]', which keep real structural meaning everywhere (multi-character
// strings and nested/POSIX sets), including behind a backslash.
const BACKSLASH_ESCAPABLE_CHARS = new Set([
  "'",
  "*",
  "@",
  ".",
  "_",
  "-",
  "|",
  ">",
  ";",
  "(",
  ")",
  "?",
  "+",
  "&",
  "$",
]);

// The subset of BACKSLASH_ESCAPABLE_CHARS that is *also* literal when
// written bare - without a backslash - directly inside a '[...]' set (not
// inside a nested '{...}' string). This excludes '&' and '$': both remain
// reserved when bare at this level - '&' still raises a parse error (see
// readBracketSetLiteral) and '$' parses but matches nothing (see
// AETHER_ATOM) - even though both are literal via '\&' / '\$', and both are
// literal when bare inside '{...}'.
const BRACKET_BARE_LITERAL_CHARS = new Set(
  [...BACKSLASH_ESCAPABLE_CHARS].filter(ch => ch !== "&" && ch !== "$"),
);

// A bare, unescaped '$' - whether alone in a pattern or alone inside
// '[...]' - is reserved for what ICU calls "aether": a zero-width match at
// the true start/end of the string (see e.g. `[0-9$]` in ICU's own
// documentation). This engine does not implement that concept. Rather than
// raise a parse error, '$' compiles to an atom that matches nothing at all -
// not a literal '$', not zero-width anywhere - so rules using it compile
// today and would simply gain real matching behavior if aether support is
// added later, without a breaking change. A literal, matchable '$' is still
// available via '\$' (anywhere), or as a '{$}' member inside a set.
const AETHER_ATOM: SetAtom = {
  kind: "set",
  alternatives: [],
  charTests: [],
  matchesStartOfString: false,
  matchesEndOfString: false,
};

type Unit = { type: "literal"; char: string } | { type: "marker"; char: string };

class Parser {
  private readonly src: string;
  private i = 0;
  private inQuote = false;
  private groupCount = 0;

  constructor(src: string) {
    this.src = src;
  }

  parse(): CompiledPass[] {
    const passes: CompiledPass[] = [];
    let currentRules: CompiledRule[] = [];

    const flushRules = (): void => {
      if (currentRules.length > 0) {
        passes.push({ kind: "rules", rules: currentRules });
        currentRules = [];
      }
    };

    this.skipRawWhitespace();
    while (!this.atEnd()) {
      if (this.src[this.i] === ":" && this.src[this.i + 1] === ":") {
        const identifier = this.parseDirective();
        flushRules();
        const transformName = matchGlobalTransform(identifier);
        if (transformName !== null) {
          passes.push({ kind: "transform", name: transformName });
        }
      } else {
        currentRules.push(this.parseRule());
      }
      this.skipRawWhitespace();
    }
    flushRules();

    return passes;
  }

  private atEnd(): boolean {
    return this.i >= this.src.length;
  }

  private skipRawWhitespace(): void {
    while (!this.atEnd() && /\s/.test(this.src[this.i])) this.i++;
  }

  private fail(message: string): never {
    const from = Math.max(0, this.i - 20);
    const to = Math.min(this.src.length, this.i + 20);
    const before = this.src.slice(from, this.i);
    const after = this.src.slice(this.i, to);
    throw new RBTParseError(
      `RBT parse error: ${message}\n  near position ${this.i}: "...${before}<HERE>${after}..."`,
    );
  }

  private readUnicodeEscape(): Unit {
    const hexStart = this.i + 2;
    const hex = this.src.slice(hexStart, hexStart + 4);
    if (!/^[0-9a-fA-F]{4}$/.test(hex)) {
      this.fail("invalid \\u escape, expected exactly 4 hex digits");
    }
    this.i = hexStart + 4;
    return { type: "literal", char: String.fromCodePoint(parseInt(hex, 16)) };
  }

  private next(): Unit | null {
    for (;;) {
      if (this.atEnd()) return null;
      const c = this.src[this.i];

      if (c === "'") {
        if (this.src[this.i + 1] === "'") {
          this.i += 2;
          return { type: "literal", char: "'" };
        }
        this.inQuote = !this.inQuote;
        this.i++;
        continue;
      }

      if (c === "\\") {
        if (this.src[this.i + 1] === "u") {
          return this.readUnicodeEscape();
        }
        if (BACKSLASH_ESCAPABLE_CHARS.has(this.src[this.i + 1])) {
          const ch = this.src[this.i + 1];
          this.i += 2;
          return { type: "literal", char: ch };
        }
      }

      if (this.inQuote) {
        const cp = this.src.codePointAt(this.i) as number;
        const ch = String.fromCodePoint(cp);
        this.i += ch.length;
        return { type: "literal", char: ch };
      }

      if (/\s/.test(c)) {
        this.i++;
        continue;
      }

      if (STRUCTURAL_CHARS.has(c)) {
        this.i++;
        return { type: "marker", char: c };
      }

      const cp = this.src.codePointAt(this.i) as number;
      const ch = String.fromCodePoint(cp);
      this.i += ch.length;
      return { type: "literal", char: ch };
    }
  }

  private peek(): Unit | null {
    const savedI = this.i;
    const savedQuote = this.inQuote;
    const u = this.next();
    this.i = savedI;
    this.inQuote = savedQuote;
    return u;
  }

  private parseDirective(): string {
    this.i += 2;
    const start = this.i;
    while (!this.atEnd() && this.src[this.i] !== ";") this.i++;
    if (this.atEnd()) this.fail("unterminated '::' directive, expected ';'");
    const identifier = this.src.slice(start, this.i).trim();
    this.i++;
    return identifier;
  }

  private parseRule(): CompiledRule {
    const ruleStart = this.i;
    this.groupCount = 0;
    const { nodes, openIdx, closeIdx } = this.parsePattern();

    if (openIdx !== null && closeIdx !== null && closeIdx < openIdx) {
      this.fail("'}' appears before '{' in the rule");
    }

    let ante: PatternNode[];
    let key: PatternNode[];
    let post: PatternNode[];

    if (openIdx !== null && closeIdx !== null) {
      ante = nodes.slice(0, openIdx);
      key = nodes.slice(openIdx, closeIdx);
      post = nodes.slice(closeIdx);
    } else if (openIdx !== null) {
      ante = nodes.slice(0, openIdx);
      key = nodes.slice(openIdx);
      post = [];
    } else if (closeIdx !== null) {
      ante = [];
      key = nodes.slice(0, closeIdx);
      post = nodes.slice(closeIdx);
    } else {
      ante = [];
      key = nodes;
      post = [];
    }

    if (key.length === 0) this.fail("rule has an empty key (nothing to match)");

    const gt = this.next();
    if (gt === null || gt.type !== "marker" || gt.char !== ">") {
      this.fail("expected '>' after rule pattern");
    }

    const { segments, cursorOffset } = this.parseReplacementSegments(";");

    const semi = this.next();
    if (semi === null || semi.type !== "marker" || semi.char !== ";") {
      this.fail("expected ';' to terminate rule");
    }

    return {
      ante,
      key,
      post,
      replacement: segments,
      cursorOffset,
      source: this.src.slice(ruleStart, this.i).trim(),
    };
  }

  private parsePattern(): {
    nodes: PatternNode[];
    openIdx: number | null;
    closeIdx: number | null;
  } {
    const nodes: PatternNode[] = [];
    let openIdx: number | null = null;
    let closeIdx: number | null = null;

    for (;;) {
      const u = this.peek();
      if (u === null) this.fail("unexpected end of input while parsing a rule (missing '>')");
      if (u.type === "marker" && u.char === ">") return { nodes, openIdx, closeIdx };

      this.next();

      if (u.type === "literal") {
        nodes.push(
          this.attachQuantifier({
            kind: "atom",
            atom: { kind: "char", value: u.char },
            quantifier: "one",
          }),
        );
        continue;
      }

      switch (u.char) {
        case "{":
          if (openIdx !== null) this.fail("a rule may contain at most one '{'");
          openIdx = nodes.length;
          break;
        case "}":
          if (closeIdx !== null) this.fail("a rule may contain at most one '}'");
          closeIdx = nodes.length;
          break;
        case "[":
          nodes.push(
            this.attachQuantifier({
              kind: "atom",
              atom: this.parseBracketExpression(),
              quantifier: "one",
            }),
          );
          break;
        case "$":
          nodes.push(this.attachQuantifier({ kind: "atom", atom: AETHER_ATOM, quantifier: "one" }));
          break;
        case "(": {
          this.groupCount++;
          const captureIndex = this.groupCount;
          nodes.push(
            this.attachQuantifier({
              kind: "group",
              nodes: this.parseGroupBody(),
              quantifier: "one",
              captureIndex,
            }),
          );
          break;
        }
        case ")":
          this.fail("unexpected ')' with no matching '('");
          break;
        case "?":
        case "*":
        case "+":
          this.fail(`quantifier '${u.char}' with nothing to quantify`);
          break;
        default:
          this.fail(`unexpected '${u.char}' in rule pattern`);
      }
    }
  }

  private parseGroupBody(): PatternNode[] {
    const nodes: PatternNode[] = [];

    for (;;) {
      const u = this.peek();
      if (u === null) this.fail("unterminated '(' group, missing ')'");
      if (u.type === "marker" && u.char === ")") {
        this.next();
        return nodes;
      }

      this.next();

      if (u.type === "literal") {
        nodes.push(
          this.attachQuantifier({
            kind: "atom",
            atom: { kind: "char", value: u.char },
            quantifier: "one",
          }),
        );
        continue;
      }

      switch (u.char) {
        case "[":
          nodes.push(
            this.attachQuantifier({
              kind: "atom",
              atom: this.parseBracketExpression(),
              quantifier: "one",
            }),
          );
          break;
        case "(": {
          this.groupCount++;
          const captureIndex = this.groupCount;
          nodes.push(
            this.attachQuantifier({
              kind: "group",
              nodes: this.parseGroupBody(),
              quantifier: "one",
              captureIndex,
            }),
          );
          break;
        }
        case "$":
          nodes.push(this.attachQuantifier({ kind: "atom", atom: AETHER_ATOM, quantifier: "one" }));
          break;
        case "?":
        case "*":
        case "+":
          this.fail(`quantifier '${u.char}' with nothing to quantify`);
          break;
        default:
          this.fail(`unexpected '${u.char}' inside '(...)' group`);
      }
    }
  }

  private attachQuantifier(node: PatternNode): PatternNode {
    if (this.inQuote) return node;
    this.skipRawWhitespace();
    if (this.atEnd()) return node;
    const c = this.src[this.i];
    if (c === "?") {
      this.i++;
      return { ...node, quantifier: "optional" };
    }
    if (c === "*") {
      this.i++;
      return { ...node, quantifier: "star" };
    }
    if (c === "+") {
      this.i++;
      return { ...node, quantifier: "plus" };
    }
    return node;
  }

  private parseReplacementSegments(terminator: ";" | ")"): {
    segments: ReplacementSegment[];
    cursorOffset: number | null;
  } {
    const segments: ReplacementSegment[] = [];
    let cursorOffset: number | null = null;

    for (;;) {
      const u = this.peek();
      if (u === null)
        this.fail(`unexpected end of input while parsing a replacement (missing '${terminator}')`);
      if (u.type === "marker" && u.char === terminator) return { segments, cursorOffset };

      this.next();

      if (u.type === "literal") {
        segments.push({ kind: "literal", value: u.char });
        continue;
      }

      if (u.char === "|") {
        if (terminator === ")")
          this.fail("'|' cursor placement is not allowed inside a '&Function(...)' argument");
        if (cursorOffset !== null) this.fail("a replacement may contain at most one '|'");
        cursorOffset = segments.length;
        continue;
      }

      if (u.char === "$") {
        segments.push(this.parseBackref());
        continue;
      }

      if (u.char === "&") {
        segments.push(this.parseFunctionCall());
        continue;
      }

      this.fail(
        `unexpected '${u.char}' in replacement (only literal text, '$N' backreferences, '&Name(...)' calls, and one '|' are allowed)`,
      );
    }
  }

  private parseBackref(): ReplacementSegment {
    const start = this.i;
    while (!this.atEnd() && /[0-9]/.test(this.src[this.i])) this.i++;
    if (this.i === start) this.fail("'$' must be followed by a capture group number, e.g. '$1'");
    const index = parseInt(this.src.slice(start, this.i), 10);
    if (index < 1 || index > this.groupCount) {
      this.fail(
        `'$${index}' refers to a capturing group that does not exist in this rule (this rule declares ${this.groupCount} group${
          this.groupCount === 1 ? "" : "s"
        })`,
      );
    }
    return { kind: "backref", index };
  }

  private parseFunctionCall(): ReplacementSegment {
    const nameStart = this.i;
    while (!this.atEnd() && this.src[this.i] !== "(" && !/\s/.test(this.src[this.i])) this.i++;
    const rawName = this.src.slice(nameStart, this.i);

    this.skipRawWhitespace();
    if (this.atEnd() || this.src[this.i] !== "(") {
      this.fail(`expected '(' after inline function name '&${rawName}'`);
    }
    this.i++;

    const name = matchInlineFunctionName(rawName);
    if (name === null) {
      this.fail(
        `unknown inline transliterator function '&${rawName}(...)' - supported functions are &Any-Upper(...), &Any-Lower(...)`,
      );
    }

    const { segments } = this.parseReplacementSegments(")");
    this.next();

    return { kind: "call", name, args: segments };
  }

  private parseBracketExpression(): SetAtom {
    if (this.src[this.i] === ":") {
      return this.parsePosixClassBody();
    }
    return this.parseBracketSetBody();
  }

  private readBracketSetLiteral(): string {
    if (
      !this.inQuote &&
      !this.atEnd() &&
      this.src[this.i] !== "-" &&
      BRACKET_BARE_LITERAL_CHARS.has(this.src[this.i])
    ) {
      const ch = this.src[this.i];
      this.i++;
      return ch;
    }
    const u = this.next();
    if (u === null) this.fail("unterminated '[' character set, missing ']'");
    if (u.type === "marker") this.fail(`unexpected '${u.char}' inside '[...]' character set`);
    return u.char;
  }

  private parseBracketSetBody(): SetAtom {
    let negate = false;
    this.skipRawWhitespace();
    if (!this.atEnd() && this.src[this.i] === "^") {
      this.i++;
      negate = true;
    }

    const alternatives: string[][] = [];
    const charTests: Array<(ch: string) => boolean> = [];
    let matchesStartOfString = false;
    let matchesEndOfString = false;
    let sawAnyMember = false;

    for (;;) {
      if (!this.inQuote) {
        this.skipRawWhitespace();
        if (!this.atEnd() && this.src[this.i] === "]") {
          this.i++;
          break;
        }
        if (!this.atEnd() && this.src[this.i] === "[") {
          this.i++;
          const child = this.parseBracketExpression();
          alternatives.push(...child.alternatives);
          charTests.push(...child.charTests);
          matchesStartOfString = matchesStartOfString || child.matchesStartOfString;
          matchesEndOfString = matchesEndOfString || child.matchesEndOfString;
          sawAnyMember = true;
          continue;
        }
        if (!this.atEnd() && this.src[this.i] === "{") {
          this.i++;
          alternatives.push(this.parseMultiCharStringBody());
          sawAnyMember = true;
          continue;
        }
        if (!this.atEnd() && this.src[this.i] === "$") {
          // See AETHER_ATOM: a bare '$' inside a set counts as a member (so
          // e.g. '[$]' alone isn't rejected as an empty set) but contributes
          // no alternative and no charTest, so it never actually matches.
          this.i++;
          sawAnyMember = true;
          continue;
        }
      }

      const ch1 = this.readBracketSetLiteral();
      sawAnyMember = true;

      let formedRange = false;
      if (!this.inQuote) {
        this.skipRawWhitespace();
        if (!this.atEnd() && this.src[this.i] === "-") {
          const dashPos = this.i;
          this.i++;
          this.skipRawWhitespace();
          if (!this.atEnd() && this.src[this.i] !== "]") {
            const ch2 = this.readBracketSetLiteral();
            const startCp = ch1.codePointAt(0) as number;
            const endCp = ch2.codePointAt(0) as number;
            if (startCp > endCp) {
              this.fail(
                `invalid character range '${ch1}-${ch2}': the start (U+${startCp.toString(16).toUpperCase().padStart(4, "0")}) is greater than the end (U+${endCp.toString(16).toUpperCase().padStart(4, "0")})`,
              );
            }
            charTests.push(makeRangeTest(startCp, endCp));
            formedRange = true;
          } else {
            this.i = dashPos;
          }
        }
      }

      if (!formedRange) alternatives.push([ch1]);
    }

    if (!sawAnyMember) this.fail("character set '[]' must not be empty");

    if (!negate) {
      return { kind: "set", alternatives, charTests, matchesStartOfString, matchesEndOfString };
    }

    const singleChars = new Set<string>();
    for (const alt of alternatives) {
      if (alt.length === 1) singleChars.add(alt[0]);
    }
    const positiveCharTests = charTests;
    const negatedTest = (ch: string): boolean => {
      if (singleChars.has(ch)) return false;
      for (const t of positiveCharTests) {
        if (t(ch)) return false;
      }
      return true;
    };

    return {
      kind: "set",
      alternatives: [],
      charTests: [negatedTest],
      matchesStartOfString: true,
      matchesEndOfString: true,
    };
  }

  private parseMultiCharStringBody(): string[] {
    const chars: string[] = [];
    for (;;) {
      if (!this.inQuote && !this.atEnd() && BACKSLASH_ESCAPABLE_CHARS.has(this.src[this.i])) {
        chars.push(this.src[this.i]);
        this.i++;
        continue;
      }

      const u = this.next();
      if (u === null) this.fail("unterminated '{' multi-character string, missing '}'");
      if (u.type === "marker" && u.char === "}") break;
      if (u.type === "marker")
        this.fail(`unexpected '${u.char}' inside '{...}' multi-character string`);
      chars.push(u.char);
    }
    if (chars.length === 0) this.fail("'{}' multi-character string must not be empty");
    return chars;
  }

  private parsePosixClassBody(): SetAtom {
    this.i++;
    let negated = false;
    if (!this.atEnd() && this.src[this.i] === "^") {
      this.i++;
      negated = true;
    }

    const nameStart = this.i;
    while (!this.atEnd() && !(this.src[this.i] === ":" && this.src[this.i + 1] === "]")) {
      this.i++;
    }
    if (this.atEnd()) this.fail("unterminated '[:...:]' POSIX class token, expected ':]'");
    const name = this.src.slice(nameStart, this.i).trim();
    this.i += 2;

    const key = (negated ? "^" : "") + name;
    const spec = POSIX_CLASSES[key];
    if (spec === undefined) {
      this.fail(
        `unknown POSIX class token '[:${key}:]' - supported tokens are [:L:], [:^L:], [:Lu:], [:^Lu:], [:Ll:], [:^Ll:], [:M:], [:^M:], [:Mn:], [:^Mn:]`,
      );
    }

    return {
      kind: "set",
      alternatives: [],
      charTests: [spec.test],
      matchesStartOfString: spec.matchesStartOfString,
      matchesEndOfString: spec.matchesEndOfString,
    };
  }
}

function parseRuleSource(source: string): CompiledPass[] {
  return new Parser(source).parse();
}

function matchInlineFunctionName(name: string): InlineFunctionName | null {
  switch (name) {
    case "Any-Upper":
    case "Any-Lower":
      return name;
    default:
      return null;
  }
}

const INLINE_FUNCTIONS: Readonly<Record<InlineFunctionName, (input: string) => string>> = {
  "Any-Upper": input => input.toLocaleUpperCase(),
  "Any-Lower": input => input.toLocaleLowerCase(),
};

function resolveSegment(
  segment: ReplacementSegment,
  captures: ReadonlyMap<number, string[]>,
): string[] {
  if (segment.kind === "literal") return [segment.value];
  if (segment.kind === "backref") return captures.get(segment.index) ?? [];
  const argText = resolveReplacement(segment.args, captures).join("");
  return Array.from(INLINE_FUNCTIONS[segment.name](argText));
}

function resolveReplacement(
  segments: ReplacementSegment[],
  captures: ReadonlyMap<number, string[]>,
): string[] {
  const result: string[] = [];
  for (const segment of segments) {
    result.push(...resolveSegment(segment, captures));
  }
  return result;
}

function resolveReplacementWithCursor(
  segments: ReplacementSegment[],
  cursorOffset: number | null,
  captures: ReadonlyMap<number, string[]>,
): { chars: string[]; cursorOffset: number | null } {
  const chars: string[] = [];
  let resolvedCursorOffset: number | null = null;
  for (let i = 0; i < segments.length; i++) {
    if (cursorOffset === i) resolvedCursorOffset = chars.length;
    const segment = segments[i];
    if (segment.kind === "literal") {
      chars.push(segment.value);
    } else {
      chars.push(...resolveSegment(segment, captures));
    }
  }
  if (cursorOffset === segments.length) resolvedCursorOffset = chars.length;
  return { chars, cursorOffset: resolvedCursorOffset };
}

function matchGlobalTransform(identifier: string): GlobalTransformName | null {
  switch (identifier) {
    case "Lower":
    case "Title":
    case "NFC":
    case "NFD":
      return identifier;
    default:
      return null;
  }
}

function titleCaseOneWord(word: string): string {
  const codepoints = Array.from(word);
  if (codepoints.length === 0) return word;
  const [first, ...rest] = codepoints;
  return first.toLocaleUpperCase() + rest.join("").toLocaleLowerCase();
}

const TITLE_CASE_SEGMENTER = new Intl.Segmenter(undefined, { granularity: "word" });

function applyTitleCase(input: string): string {
  let result = "";
  for (const { segment, isWordLike } of TITLE_CASE_SEGMENTER.segment(input)) {
    result += isWordLike ? titleCaseOneWord(segment) : segment;
  }
  return result;
}

const GLOBAL_TRANSFORMS: Readonly<Record<GlobalTransformName, (input: string) => string>> = {
  Lower: input => input.toLocaleLowerCase(),
  Title: applyTitleCase,
  NFC: input => input.normalize("NFC"),
  NFD: input => input.normalize("NFD"),
};

function atomMatchLengthForward(atom: MatchAtom, text: string[], pos: number): number | null {
  if (atom.kind === "char") {
    return pos < text.length && text[pos] === atom.value ? 1 : null;
  }

  let best: number | null = null;

  for (const alt of atom.alternatives) {
    if (pos + alt.length > text.length) continue;
    let matched = true;
    for (let k = 0; k < alt.length; k++) {
      if (text[pos + k] !== alt[k]) {
        matched = false;
        break;
      }
    }
    if (matched && (best === null || alt.length > best)) best = alt.length;
  }

  if (pos < text.length && best === null) {
    for (const test of atom.charTests) {
      if (test(text[pos])) {
        best = 1;
        break;
      }
    }
  }

  return best;
}

function atomMatchLengthBackward(atom: MatchAtom, text: string[], posEnd: number): number | null {
  if (atom.kind === "char") {
    return posEnd > 0 && text[posEnd - 1] === atom.value ? 1 : null;
  }

  let best: number | null = null;

  for (const alt of atom.alternatives) {
    const start = posEnd - alt.length;
    if (start < 0) continue;
    let matched = true;
    for (let k = 0; k < alt.length; k++) {
      if (text[start + k] !== alt[k]) {
        matched = false;
        break;
      }
    }
    if (matched && (best === null || alt.length > best)) best = alt.length;
  }

  if (posEnd > 0 && best === null) {
    for (const test of atom.charTests) {
      if (test(text[posEnd - 1])) {
        best = 1;
        break;
      }
    }
  }

  return best;
}

function atomMatchesZeroWidthAt(atom: MatchAtom, pos: number, textLength: number): boolean {
  if (atom.kind === "char") return false;
  return (
    (atom.matchesStartOfString && pos === 0) || (atom.matchesEndOfString && pos === textLength)
  );
}

function tryMatchForward(atom: MatchAtom, text: string[], pos: number): number | null {
  const consumed = atomMatchLengthForward(atom, text, pos);
  if (consumed !== null) return consumed;
  if (atomMatchesZeroWidthAt(atom, pos, text.length)) return 0;
  return null;
}

function tryMatchBackward(atom: MatchAtom, text: string[], posEnd: number): number | null {
  const consumed = atomMatchLengthBackward(atom, text, posEnd);
  if (consumed !== null) return consumed;
  if (atomMatchesZeroWidthAt(atom, posEnd, text.length)) return 0;
  return null;
}

interface MatchOutcome {
  length: number;
  captures: ReadonlyMap<number, string[]>;
}

const NO_CAPTURES: ReadonlyMap<number, string[]> = new Map();

function matchNodeOnceForward(node: PatternNode, text: string[], pos: number): MatchOutcome | null {
  if (node.kind === "atom") {
    const length = tryMatchForward(node.atom, text, pos);
    return length === null ? null : { length, captures: NO_CAPTURES };
  }
  const seq = matchSequenceForward(text, pos, node.nodes);
  if (seq === null) return null;
  const captures = new Map(seq.captures);
  captures.set(node.captureIndex, text.slice(pos, pos + seq.length));
  return { length: seq.length, captures };
}

function matchNodeOnceBackward(
  node: PatternNode,
  text: string[],
  posEnd: number,
): MatchOutcome | null {
  if (node.kind === "atom") {
    const length = tryMatchBackward(node.atom, text, posEnd);
    return length === null ? null : { length, captures: NO_CAPTURES };
  }
  const seq = matchSequenceBackward(text, posEnd, node.nodes);
  if (seq === null) return null;
  const captures = new Map(seq.captures);
  captures.set(node.captureIndex, text.slice(posEnd - seq.length, posEnd));
  return { length: seq.length, captures };
}

function matchNodeForward(node: PatternNode, text: string[], pos: number): MatchOutcome | null {
  if (node.quantifier === "one") {
    return matchNodeOnceForward(node, text, pos);
  }

  if (node.quantifier === "optional") {
    const once = matchNodeOnceForward(node, text, pos);
    return once !== null ? once : { length: 0, captures: NO_CAPTURES };
  }

  let total = 0;
  let count = 0;
  let captures: ReadonlyMap<number, string[]> = NO_CAPTURES;
  for (;;) {
    const once = matchNodeOnceForward(node, text, pos + total);
    if (once === null) break;
    total += once.length;
    count++;
    captures = once.captures;
    if (once.length === 0) break;
  }
  if (node.quantifier === "plus" && count === 0) return null;
  return { length: total, captures };
}

function matchNodeBackward(node: PatternNode, text: string[], posEnd: number): MatchOutcome | null {
  if (node.quantifier === "one") {
    return matchNodeOnceBackward(node, text, posEnd);
  }

  if (node.quantifier === "optional") {
    const once = matchNodeOnceBackward(node, text, posEnd);
    return once !== null ? once : { length: 0, captures: NO_CAPTURES };
  }

  let total = 0;
  let count = 0;
  let captures: ReadonlyMap<number, string[]> = NO_CAPTURES;
  for (;;) {
    const once = matchNodeOnceBackward(node, text, posEnd - total);
    if (once === null) break;
    total += once.length;
    count++;
    captures = once.captures;
    if (once.length === 0) break;
  }
  if (node.quantifier === "plus" && count === 0) return null;
  return { length: total, captures };
}

function matchSequenceForward(
  text: string[],
  startPos: number,
  nodes: PatternNode[],
): MatchOutcome | null {
  let pos = startPos;
  let captures: ReadonlyMap<number, string[]> = NO_CAPTURES;
  for (const node of nodes) {
    const outcome = matchNodeForward(node, text, pos);
    if (outcome === null) return null;
    pos += outcome.length;
    if (outcome.captures.size > 0) {
      const merged = captures === NO_CAPTURES ? new Map<number, string[]>() : new Map(captures);
      for (const [index, value] of outcome.captures) merged.set(index, value);
      captures = merged;
    }
  }
  return { length: pos - startPos, captures };
}

function matchSequenceBackward(
  text: string[],
  endPos: number,
  nodes: PatternNode[],
): MatchOutcome | null {
  let pos = endPos;
  let captures: ReadonlyMap<number, string[]> = NO_CAPTURES;
  for (let i = nodes.length - 1; i >= 0; i--) {
    const outcome = matchNodeBackward(nodes[i], text, pos);
    if (outcome === null) return null;
    pos -= outcome.length;
    if (outcome.captures.size > 0) {
      const merged = captures === NO_CAPTURES ? new Map<number, string[]>() : new Map(captures);
      for (const [index, value] of outcome.captures) merged.set(index, value);
      captures = merged;
    }
  }
  return { length: endPos - pos, captures };
}

interface MatchResult {
  rule: CompiledRule;
  keyConsumed: number;
  captures: ReadonlyMap<number, string[]>;
}

// ICU's RuleBasedTransliterator documentation is explicit that "if multiple
// rules may match at some point, the first matching rule is applied." Rule
// precedence at a given cursor position is therefore governed entirely by
// declaration order - never by which candidate would consume more text or
// carries more ante/post context. It is the rule author's job to place more
// specific (typically longer) rules before more general (typically shorter)
// fallback rules if that ordering is what they want; this function must not
// second-guess that by picking a "better" match further down the list.
//
// ICU *does* apply longest-match logic elsewhere, but only in two narrower
// places that are unrelated to this function: (1) UnicodeSet alternatives
// such as [a b {ch} {ll}], handled by atomMatchLengthForward/Backward above,
// where the longest alternative within a *single* set is preferred, and
// (2) charset conversion tables, which this transliteration engine does not
// implement. Neither extends to the order in which standalone rules match.
function findFirstMatch(text: string[], cursor: number, rules: CompiledRule[]): MatchResult | null {
  for (const rule of rules) {
    const keyOutcome = matchSequenceForward(text, cursor, rule.key);
    if (keyOutcome === null) continue;

    const anteOutcome =
      rule.ante.length === 0
        ? { length: 0, captures: NO_CAPTURES }
        : matchSequenceBackward(text, cursor, rule.ante);
    if (anteOutcome === null) continue;

    const postOutcome =
      rule.post.length === 0
        ? { length: 0, captures: NO_CAPTURES }
        : matchSequenceForward(text, cursor + keyOutcome.length, rule.post);
    if (postOutcome === null) continue;

    let captures: ReadonlyMap<number, string[]> = NO_CAPTURES;
    if (
      anteOutcome.captures.size > 0 ||
      keyOutcome.captures.size > 0 ||
      postOutcome.captures.size > 0
    ) {
      const merged = new Map<number, string[]>();
      for (const [index, value] of anteOutcome.captures) merged.set(index, value);
      for (const [index, value] of keyOutcome.captures) merged.set(index, value);
      for (const [index, value] of postOutcome.captures) merged.set(index, value);
      captures = merged;
    }
    return { rule, keyConsumed: keyOutcome.length, captures };
  }

  return null;
}

function runPass(input: string, rules: CompiledRule[]): string {
  if (rules.length === 0) return input;

  const text: string[] = Array.from(input);
  let cursor = 0;

  const maxSteps = Math.max(100_000, text.length * 200);
  let steps = 0;

  while (cursor < text.length) {
    if (++steps > maxSteps) {
      throw new RBTRuntimeError(
        "RBT: a pass did not terminate within the step budget. This usually means a rule's " +
          "'|' cursor placement never makes forward progress (e.g. a rule that rewrites text " +
          "to something it, or another rule, immediately rewrites back at the same position).",
      );
    }

    const found = findFirstMatch(text, cursor, rules);
    if (found) {
      const { rule, keyConsumed, captures } = found;
      const { chars: replacementChars, cursorOffset: resolvedCursorOffset } =
        resolveReplacementWithCursor(rule.replacement, rule.cursorOffset, captures);
      text.splice(cursor, keyConsumed, ...replacementChars);
      if (resolvedCursorOffset !== null) {
        cursor += resolvedCursorOffset;
      } else {
        cursor += keyConsumed === 0 ? replacementChars.length + 1 : replacementChars.length;
      }
    } else {
      cursor += 1;
    }
  }

  return text.join("");
}

export class RBT_JS {
  private readonly passes: CompiledPass[];

  private constructor(passes: CompiledPass[]) {
    this.passes = passes;
  }

  static fromRules(source: string): RBT_JS {
    if (typeof source !== "string") {
      throw new TypeError("RBT.fromRules(source): source must be a string");
    }
    return new RBT_JS(parseRuleSource(source));
  }

  transliterate(input: string): string {
    if (typeof input !== "string") {
      throw new TypeError("transliterate(input): input must be a string");
    }
    let current = input;
    for (const pass of this.passes) {
      current =
        pass.kind === "rules"
          ? runPass(current, pass.rules)
          : GLOBAL_TRANSFORMS[pass.name](current);
    }
    return current;
  }
}

// EXPORT

type RbtApi = typeof RBT_JS;

// 1. Default to JS implementation, which is already loaded
let isJsImpl = true;
let activeImpl: RbtApi = RBT_JS;
let nativeCache: RbtApi;

export const settings = {
  get JS_IMPLEMENTATION() {
    return isJsImpl;
  },
  set JS_IMPLEMENTATION(value: boolean) {
    if (isJsImpl === value) return;
    isJsImpl = value;

    // 2. If JS, switch immediately.
    // If Native, apply the cache (which is `undefined` on first run).
    activeImpl = value ? RBT_JS : nativeCache;
  },
};

export const RBT = new Proxy({} as RbtApi, {
  get(_target, prop) {
    // 3. HOT PATH: Completely bypassed if using JS or already loaded native!
    // This only executes once: the very first time Native is accessed.
    if (!activeImpl) {
      activeImpl = nativeCache = require("icu-transliterator").RBT;
    }

    // 4. Direct property access
    return activeImpl[prop as keyof RbtApi];
  },
});

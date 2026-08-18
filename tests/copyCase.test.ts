import { describe, it, expect } from "vitest";
import { copyCase } from "../src/helpers/copyCase";

describe("copyCase", () => {
  it("defaults to title case", () => {
    expect(copyCase("HeLLo", "world")).toBe("World");
  });

  it("copies an all-uppercase pattern letter by letter", () => {
    expect(copyCase("ABC", "xyz")).toBe("XYZ");
  });

  it("copies an all-lowercase pattern letter by letter", () => {
    expect(copyCase("abc", "XYZ")).toBe("xyz");
  });

  it("does not count a combining diacritical mark as a letter, and leaves it untouched", () => {
    expect(copyCase("WXYZ", "e\u0301bcd")).toBe("E\u0301BCD");
  });

  it("does not count an apostrophe as a letter, and leaves it untouched", () => {
    expect(copyCase("DON'T", "wo'nt")).toBe("WO'NT");
  });

  it("counts a precomposed accented letter as exactly one letter", () => {
    expect(copyCase("ABCD", "\u00e9cho")).toBe("\u00c9CHO");
  });

  it("handles different count of words", () => {
    expect(copyCase("Ab Cd", "wxyz")).toBe("Wxyz");
  });

  it("ignores word boundaries in `to` once letter counts match overall", () => {
    expect(copyCase("wxyz", "Ab Cd")).toBe("ab cd");
  });

  it("passes digits through untouched without consuming a source letter", () => {
    expect(copyCase("ABCDEF", "abc123def")).toBe("ABC123def");
  });

  it("defaults to title case when copying a string's case pattern onto itself", () => {
    expect(copyCase("MiXeD", "MiXeD")).toBe("Mixed");
  });

  it("handles the case where neither string has any letters", () => {
    expect(copyCase("123", "!!!")).toBe("!!!");
  });

  it("handles two empty strings", () => {
    expect(copyCase("", "")).toBe("");
  });

  it("applies a lowercase pattern and silently drops the extra word from `from`", () => {
    expect(copyCase("hello world", "FOO")).toBe("foo");
  });

  it("applies an uppercase pattern", () => {
    expect(copyCase("HELLO", "wo")).toBe("WO");
  });

  it("applies a title-case pattern", () => {
    expect(copyCase("Hello", "wo")).toBe("Wo");
  });

  it("classifies a mixed-case word starting with a lowercase letter as title case", () => {
    expect(copyCase("hELLO", "hi")).toBe("Hi");
  });

  it("lowercases extra words in `to` that have no corresponding word in `from`", () => {
    expect(copyCase("Hi", "foo bar baz qux")).toBe("Foo bar baz qux");
  });

  it("preserves punctuation and spacing while applying per-word case", () => {
    expect(copyCase("Hello, World!", "wow! great job")).toBe("Wow! Great job");
  });

  it("preserves digits between words while applying per-word case", () => {
    expect(copyCase("Hello World", "cat1 dog2")).toBe("Cat1 Dog2");
  });

  it("works with Cyrillic text", () => {
    expect(copyCase("Привет", "мир")).toBe("Мир");
  });

  it("works with Greek text", () => {
    expect(copyCase("ΑΘΗΝΑ", "αβγ")).toBe("ΑΒΓ");
  });

  it("works with Armenian text", () => {
    expect(copyCase("ԱԲ", "գ")).toBe("Գ");
  });

  it("returns `to` unchanged when neither string has any letters", () => {
    expect(copyCase("!!!", "??")).toBe("??");
  });

  it("returns `to` unchanged when it has no letters, even if `from` does", () => {
    expect(copyCase("Hello", "123!!")).toBe("123!!");
  });

  it("lowercases every word in `to` when `from` has no letters at all", () => {
    expect(copyCase("123", "FOO BAR")).toBe("foo bar");
  });
});

import { describe, it, expect } from "vitest";
import { copyCase } from "../src/helpers/copyCase";

describe("copyCase", () => {
  it("defaults to title case", () => {
    expect(copyCase("HeLLo", "world", "en")).toBe("World");
  });

  it("copies an all-uppercase pattern letter by letter", () => {
    expect(copyCase("ABC", "xyz", "en")).toBe("XYZ");
  });

  it("copies an all-lowercase pattern letter by letter", () => {
    expect(copyCase("abc", "XYZ", "en")).toBe("xyz");
  });

  it("does not count a combining diacritical mark as a letter, and leaves it untouched", () => {
    expect(copyCase("WXYZ", "e\u0301bcd", "en")).toBe("E\u0301BCD");
  });

  it("does not count an apostrophe as a letter, and leaves it untouched", () => {
    expect(copyCase("DON'T", "wo'nt", "en")).toBe("WO'NT");
  });

  it("copies the case of each part of a word with apostrophes when both words have them", () => {
    expect(copyCase("d'Artagnan", "д’артаньян", "ru")).toBe("д’Артаньян");
    expect(copyCase("D'ARTAGNAN", "д’артаньян", "ru")).toBe("Д’АРТАНЬЯН");
    expect(copyCase("d'Artagnan", "դ՚աղտանան", "hy")).toBe("դ՚Աղտանան");
  });

  it("copies a word's case as a whole when only the source has an apostrophe", () => {
    expect(copyCase("O'Brien", "оубрин", "ru")).toBe("Оубрин");
  });

  it("counts a precomposed accented letter as exactly one letter", () => {
    expect(copyCase("ABCD", "\u00e9cho", "en")).toBe("\u00c9CHO");
  });

  it("handles different count of words", () => {
    expect(copyCase("Ab Cd", "wxyz", "en")).toBe("Wxyz");
  });

  it("ignores word boundaries in `to` once letter counts match overall", () => {
    expect(copyCase("wxyz", "Ab Cd", "en")).toBe("ab cd");
  });

  it("matches list items one by one when a word is lost in an earlier item", () => {
    expect(copyCase("Gerard 't Hooft, Gratien, DUMAS", "жерар  оофт, грасьен, дюма", "ru")).toBe(
      "Жерар  оофт, Грасьен, ДЮМА",
    );
    expect(copyCase("Paris، Lyon", "париж، лион", "ru")).toBe("Париж، Лион");
  });

  it("passes digits through untouched without consuming a source letter", () => {
    expect(copyCase("ABCDEF", "abc123def", "en")).toBe("ABC123DEF");
  });

  it("defaults to title case when copying a string's case pattern onto itself", () => {
    expect(copyCase("MiXeD", "MiXeD", "en")).toBe("Mixed");
  });

  it("handles the case where neither string has any letters", () => {
    expect(copyCase("123", "!!!", "en")).toBe("!!!");
  });

  it("handles two empty strings", () => {
    expect(copyCase("", "", "en")).toBe("");
  });

  it("applies a lowercase pattern and silently drops the extra word from `from`", () => {
    expect(copyCase("hello world", "FOO", "en")).toBe("foo");
  });

  it("applies an uppercase pattern", () => {
    expect(copyCase("HELLO", "wo", "en")).toBe("WO");
  });

  it("applies a title-case pattern for multi-letter words", () => {
    expect(copyCase("Hello", "wo", "en")).toBe("Wo");
  });

  it("applies a title-case pattern for 1-letter words", () => {
    expect(copyCase("J. K. Rowling", "джей. кей. ролинг", "en")).toBe("Джей. Кей. Ролинг");
  });

  it("classifies a mixed-case word starting with a lowercase letter as title case", () => {
    expect(copyCase("hELLO", "hi", "en")).toBe("Hi");
  });

  it("lowercases extra words in `to` that have no corresponding word in `from`", () => {
    expect(copyCase("Hi", "foo bar baz qux", "en")).toBe("Foo bar baz qux");
  });

  it("preserves punctuation and spacing while applying per-word case", () => {
    expect(copyCase("Hello, World!", "wow! great job", "en")).toBe("Wow! Great job");
  });

  it("preserves digits between words while applying per-word case", () => {
    expect(copyCase("Hello World", "cat1 dog2", "en")).toBe("Cat1 Dog2");
  });

  it("works with Cyrillic text", () => {
    expect(copyCase("Привет", "мир", "en")).toBe("Мир");
  });

  it("works with Greek text", () => {
    expect(copyCase("ΑΘΗΝΑ", "αβγ", "en")).toBe("ΑΒΓ");
  });

  it("works with Armenian text", () => {
    expect(copyCase("ԱԲ", "գ", "en")).toBe("Գ");
  });

  it("returns `to` unchanged when neither string has any letters", () => {
    expect(copyCase("!!!", "??", "en")).toBe("??");
  });

  it("returns `to` unchanged when it has no letters, even if `from` does", () => {
    expect(copyCase("Hello", "123!!", "en")).toBe("123!!");
  });

  it("lowercases every word in `to` when `from` has no letters at all", () => {
    expect(copyCase("123", "FOO BAR", "en")).toBe("foo bar");
  });
});

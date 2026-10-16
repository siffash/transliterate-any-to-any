import { describe, it, expect } from "vitest";
import { validateLanguage } from "../src/helpers/validateLanguage";

describe("validateLanguage", () => {
  describe("Latin-script languages", () => {
    it("accepts the language's letters together with spaces, punctuation and digits", () => {
      expect(validateLanguage("en", "Hello, world! 123")).toBe(true);
    });

    it("is case-insensitive", () => {
      expect(validateLanguage("en", "HELLO")).toBe(true);
    });

    it("accepts language-specific letters", () => {
      expect(validateLanguage("de", "Straße Über")).toBe(true);
      expect(validateLanguage("fr", "œuvre")).toBe(true);
    });

    it("rejects letters with diacritics the language doesn't use", () => {
      expect(validateLanguage("en", "café")).toBe(false);
    });

    it("rejects a combining mark the language doesn't use", () => {
      expect(validateLanguage("en", "é")).toBe(false);
    });

    it("accepts apostrophes inside words", () => {
      expect(validateLanguage("en", "don't")).toBe(true);
    });

    it("accepts zero-width format characters", () => {
      expect(validateLanguage("en", "hello​world")).toBe(true);
    });

    it("rejects another script", () => {
      expect(validateLanguage("en", "Привет")).toBe(false);
    });
  });

  describe("Cyrillic-script languages", () => {
    it("accepts the language's letters, case-insensitively", () => {
      expect(validateLanguage("ru", "Привет, мир!")).toBe(true);
      expect(validateLanguage("ru", "ПРИВЕТ")).toBe(true);
      expect(validateLanguage("ru", "Ёлка")).toBe(true);
    });

    it("accepts a letter written as base letter + combining mark", () => {
      expect(validateLanguage("ru", "й")).toBe(true);
    });

    it("tells apart languages sharing a script by their alphabets", () => {
      expect(validateLanguage("uk", "їжак")).toBe(true);
      expect(validateLanguage("ru", "їжак")).toBe(false);
      expect(validateLanguage("uk", "ёлка")).toBe(false);
    });

    it("rejects text mixing in another script", () => {
      expect(validateLanguage("ru", "привет hello")).toBe(false);
    });
  });

  describe("other scripts", () => {
    it("accepts Japanese kanji, hiragana and katakana", () => {
      expect(validateLanguage("ja", "日本語のテキスト")).toBe(true);
      expect(validateLanguage("ja", "カタカナ")).toBe(true);
    });

    it("accepts Chinese characters but not Japanese kana", () => {
      expect(validateLanguage("zh", "你好世界")).toBe(true);
      expect(validateLanguage("zh", "こんにちは")).toBe(false);
    });

    it("rejects Korean as Japanese", () => {
      expect(validateLanguage("ja", "한국어")).toBe(false);
    });

    it.each([
      ["ko", "안녕하세요"],
      ["ar", "مرحبا"],
      ["fa", "سلام"],
      ["he", "שלום"],
      ["el", "Γειά σου"],
      ["hi", "नमस्ते"],
    ] as const)("accepts %s text", (language, text) => {
      expect(validateLanguage(language, text)).toBe(true);
    });

    it.each([
      ["ar", "مرحبا، كيف حالك؟ جيد؛"],
      ["fa", "سلام، دنیا؟ خوب؛"],
      ["ur", "سلام، دنیا؟ ٹھیک؛"],
    ] as const)("accepts %s text with Arabic punctuation", (language, text) => {
      expect(validateLanguage(language, text)).toBe(true);
    });

    it.each([
      ["ar", "مرحبا ١٢٣"],
      ["fa", "سلام ۱۲۳"],
      ["ur", "سلام ۱۲۳"],
      ["hi", "नमस्ते १२३"],
    ] as const)("accepts %s text with native digits", (language, text) => {
      expect(validateLanguage(language, text)).toBe(true);
    });

    it("rejects digits of another script", () => {
      expect(validateLanguage("ar", "مرحبا ۱۲۳")).toBe(false);
    });
  });

  describe("text without letters", () => {
    it("rejects an empty string", () => {
      expect(validateLanguage("en", "")).toBe(false);
    });

    it("accepts text made only of characters common to all scripts", () => {
      expect(validateLanguage("en", "   ")).toBe(true);
      expect(validateLanguage("en", "1+1=2")).toBe(true);
      expect(validateLanguage("en", "😀")).toBe(true);
    });
  });

  describe("arrays", () => {
    it("accepts an array whose strings all match", () => {
      expect(validateLanguage("en", ["hello", "world"])).toBe(true);
    });

    it("rejects an array with one string that doesn't match", () => {
      expect(validateLanguage("en", ["hello", "мир"])).toBe(false);
    });
  });
});

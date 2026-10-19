import { describe, it, expect, vi, afterEach } from "vitest";
import { wordSplitter } from "../src/helpers/wordSplitter";

describe("wordSplitter", () => {
  describe("segmentation", () => {
    it("splits Japanese into space-separated words", async () => {
      expect(await wordSplitter("日本語のテキスト", "ja")).toBe("日本語 の テキスト");
    });

    it("splits Chinese into space-separated words", async () => {
      expect(await wordSplitter("你好世界", "zh")).toBe("你好 世界");
    });

    it("splits Thai into space-separated words", async () => {
      expect(await wordSplitter("ภาษาไทยง่าย", "th")).toBe("ภาษา ไทย ง่าย");
    });

    it("keeps each run of letters whole when skipSegmenter is set", async () => {
      expect(await wordSplitter("日本語のテキスト", "ja", undefined, true)).toBe(
        "日本語のテキスト",
      );
    });

    it("leaves already space-separated text with punctuation unchanged", async () => {
      expect(await wordSplitter("Hello, world!", "en")).toBe("Hello, world!");
      expect(await wordSplitter("Привет, мир!", "ru")).toBe("Привет, мир!");
    });

    it("keeps apostrophes and hyphens", async () => {
      expect(await wordSplitter("don't stop", "en")).toBe("don't stop");
      expect(await wordSplitter("a-b", "en")).toBe("a-b");
    });
  });

  describe("punctuation inside letter runs", () => {
    // Unicode assigns these marks to the Han/kana or Arabic scripts, so they
    // match the language's letters; they become script-neutral punctuation.
    it("converts Japanese sentence punctuation and spaces it like Latin text", async () => {
      expect(await wordSplitter("東京に行きます。", "ja")).toBe("東京 に 行きます.");
      expect(await wordSplitter("はい、そうです。", "ja")).toBe("はい, そう です.");
    });

    it("converts corner brackets to quotes, spaced outside and glued inside", async () => {
      expect(await wordSplitter("「東京」へ", "ja")).toBe('"東京" へ');
      expect(await wordSplitter("彼は「はい。」", "ja")).toBe('彼 は "はい."');
    });

    it("converts lenticular brackets to square brackets", async () => {
      expect(await wordSplitter("【東京】", "ja")).toBe("[東京]");
    });

    it("treats the katakana middle dot as a word separator", async () => {
      expect(await wordSplitter("佐藤・アレクサンダー・太郎", "ja")).toBe(
        "佐藤 アレクサンダー 太郎",
      );
    });

    it("treats a zero-width space as a word separator", async () => {
      expect(await wordSplitter("日本\u200B語", "ja")).toBe("日本 語");
    });

    it("keeps unmapped marks as they are", async () => {
      expect(await wordSplitter("〜ね", "ja")).toBe("~ね");
    });

    it("converts Chinese punctuation and title marks", async () => {
      expect(await wordSplitter("世界。《书》、对", "zh")).toBe('世界. "书", 对');
    });

    it("converts Arabic, Urdu and Persian punctuation", async () => {
      expect(await wordSplitter("مرحبا، كيف حالك؟", "ar")).toBe("مرحبا, كيف حالك?");
      expect(await wordSplitter("سلام، دنیا۔", "ur")).toBe("سلام, دنیا.");
      expect(await wordSplitter("سلام، دنیا؟ خوب؛ بله", "fa")).toBe("سلام, دنیا? خوب; بله");
    });

    it("doesn't pass punctuation to fn", async () => {
      const calls: string[] = [];
      await wordSplitter("はい、そうです。", "ja", word => (calls.push(word), word));
      expect(calls).toEqual(["はい", "そう", "です"]);
    });
  });

  describe("transforming words", () => {
    it("applies fn to every word and keeps the text between words", async () => {
      expect(await wordSplitter("Hello, big world!", "en", word => word.toUpperCase())).toBe(
        "HELLO, BIG WORLD!",
      );
    });

    it("applies fn to each segmented word", async () => {
      expect(await wordSplitter("東京に行きます", "ja", word => `[${word}]`)).toBe(
        "[東京] [に] [行きます]",
      );
    });

    it("awaits an async fn for one word before calling it for the next", async () => {
      // A single run of letters that the segmenter splits into several words
      const events: string[] = [];
      const result = await wordSplitter("東京に行きます", "ja", async word => {
        events.push(`start ${word}`);
        await new Promise(resolve => setTimeout(resolve, word === "東京" ? 20 : 1));
        events.push(`end ${word}`);
        return `[${word}]`;
      });
      expect(result).toBe("[東京] [に] [行きます]");
      expect(events).toEqual([
        "start 東京",
        "end 東京",
        "start に",
        "end に",
        "start 行きます",
        "end 行きます",
      ]);
    });
  });

  describe("whitespace and edge cases", () => {
    it("collapses runs of spaces into one", async () => {
      expect(await wordSplitter("  hello   world  ", "en")).toBe(" hello world ");
    });

    it("collapses the double spaces left when fn returns an empty string", async () => {
      expect(await wordSplitter("a b, c", "en", () => "")).toBe(" , ");
    });

    it("returns an empty string for empty input", async () => {
      expect(await wordSplitter("", "en")).toBe("");
    });

    it("leaves text without letters unchanged and doesn't call fn", async () => {
      const calls: string[] = [];
      expect(await wordSplitter("123 456", "en", word => (calls.push(word), word))).toBe("123 456");
      expect(calls).toEqual([]);
    });
  });

  // Where jieba-wasm can't run (no WebAssembly, a strict CSP, its .wasm not
  // emitted by the bundler), Chinese is still split by Intl.Segmenter
  describe("Chinese without jieba", () => {
    afterEach(() => {
      vi.doUnmock("../src/helpers/getJieba");
      vi.resetModules();
      vi.restoreAllMocks();
      vi.unstubAllGlobals();
    });

    const importWithJieba = async (getJieba: () => Promise<unknown>) => {
      vi.resetModules();
      vi.doMock("../src/helpers/getJieba", () => ({ getJieba }));
      return (await import("../src/helpers/wordSplitter")).wordSplitter;
    };

    // Words as the engine's ICU data splits them, whatever its version
    const intlWords = (text: string) =>
      Array.from(new Intl.Segmenter("zh", { granularity: "word" }).segment(text))
        .filter(({ isWordLike }) => isWordLike)
        .map(({ segment }) => `[${segment}]`)
        .join(" ");

    const TEXT = "我们一起去银行";

    it("falls back to Intl.Segmenter when jieba fails to load, warning once", async () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      const getJieba = vi.fn(() => Promise.reject(new Error("CompileError: blocked by CSP")));
      const split = await importWithJieba(getJieba);
      expect(await split(TEXT, "zh", word => `[${word}]`)).toBe(intlWords(TEXT));
      expect(await split(TEXT, "zh", word => `[${word}]`)).toBe(intlWords(TEXT));
      // Tried again on the next call, but warned only once
      expect(getJieba).toHaveBeenCalledTimes(2);
      expect(warn).toHaveBeenCalledOnce();
    });

    it("falls back to Intl.Segmenter when jieba fails while splitting", async () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      const split = await importWithJieba(async () => ({
        tag: () => {
          throw new Error("RuntimeError: unreachable");
        },
      }));
      expect(await split(TEXT, "zh", word => `[${word}]`)).toBe(intlWords(TEXT));
      expect(warn).toHaveBeenCalledOnce();
    });

    it("doesn't try jieba without WebAssembly", async () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      vi.stubGlobal("WebAssembly", undefined);
      const getJieba = vi.fn();
      const split = await importWithJieba(getJieba);
      expect(await split(TEXT, "zh", word => `[${word}]`)).toBe(intlWords(TEXT));
      expect(await split(TEXT, "zh", word => `[${word}]`)).toBe(intlWords(TEXT));
      expect(getJieba).not.toHaveBeenCalled();
      expect(warn).toHaveBeenCalledOnce();
    });
  });
});

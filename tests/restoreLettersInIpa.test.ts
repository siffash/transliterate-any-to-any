import { describe, it, expect } from "vitest";
import { restoreLettersInIpa, type RestoreIpaRule } from "../src/helpers/restoreLettersInIpa";

describe("restoreLettersInIpa", () => {
  describe("basic replacement (single rule)", () => {
    it("doubles ɹ into ɹɹ where the word has a double r", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", [
        { ipaCharToBeReplaced: "ɹ", lettersToRestore: { rr: "ɹɹ" } },
      ]);
      expect(result).toBe("ˈhɛɹɹi");
    });

    it("restores a reduced vowel to 'a' by matching any of several candidate IPA symbols", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", [
        { ipaCharToBeReplaced: ["æ", "ɛ", "ə", "o"], lettersToRestore: { a: "a" } },
      ]);
      expect(result).toBe("ˈhaɹi");
    });

    it("accepts a single rule object without wrapping it in an array", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", {
        ipaCharToBeReplaced: ["æ", "ɛ", "ə", "o"],
        lettersToRestore: { a: "a" },
      });
      expect(result).toBe("ˈhaɹi");
    });

    it("treats a single ipaCharToBeReplaced string the same as a one-element array", () => {
      const asString = restoreLettersInIpa("harry", "ˈhɛɹi", {
        ipaCharToBeReplaced: "ɹ",
        lettersToRestore: { rr: "ɹɹ" },
      });
      const asArray = restoreLettersInIpa("harry", "ˈhɛɹi", {
        ipaCharToBeReplaced: ["ɹ"],
        lettersToRestore: { rr: "ɹɹ" },
      });
      expect(asString).toBe(asArray);
      expect(asString).toBe("ˈhɛɹɹi");
    });
  });

  describe("word matching is case-insensitive", () => {
    // originalWord is lowercased internally, so callers can pass capitalized
    // words (proper nouns, sentence-initial words, etc.) without pre-processing.
    // lettersToRestore keys are matched as-given and are expected to be lowercase.
    it("matches a rule key against a word regardless of the word's casing", () => {
      const result = restoreLettersInIpa("Rr", "X", {
        ipaCharToBeReplaced: "X",
        lettersToRestore: { rr: "Y" },
      });
      expect(result).toBe("Y");
    });

    it("lets a lowercase key match a capitalized first letter of the word", () => {
      const result = restoreLettersInIpa("Axyz", "Bxyz", {
        ipaCharToBeReplaced: "B",
        lettersToRestore: { a: "C" },
      });
      expect(result).toBe("Cxyz");
    });
  });

  describe("does not force a match when nothing plausible is nearby", () => {
    // Real bug reports: an earlier version always replaced whichever
    // candidate was closest, even when it was too far away to plausibly
    // correspond to the requested letters.
    it("leaves the ipa unchanged when the candidate found actually corresponds to a different letter (Florence)", () => {
      // The "ə" in "ˈfɫɔɹəns" corresponds to the "e" in Florence, not the
      // "o" -- the "o" is already correctly "ɔ" and needs no restoring.
      const result = restoreLettersInIpa("Florence", "ˈfɫɔɹəns", [
        { ipaCharToBeReplaced: ["oʊ", "ɑ", "ʌ", "ə"], lettersToRestore: { o: "ɔ" } },
      ]);
      expect(result).toBe("ˈfɫɔɹəns");
    });

    it("leaves the ipa unchanged when neither candidate corresponds to the requested letter (Elizabeth)", () => {
      // Both "ə"s in "ɪˈɫɪzəbəθ" correspond to "a" and "e" -- neither is "i".
      const result = restoreLettersInIpa("Elizabeth", "ɪˈɫɪzəbəθ", [
        { ipaCharToBeReplaced: ["ə", "o"], lettersToRestore: { i: "i" } },
      ]);
      expect(result).toBe("ɪˈɫɪzəbəθ");
    });

    it("replaces only the candidates that actually correspond to a requested letter, leaving the rest alone", () => {
      // Two "Q"s in the ipa; only the first sits where the word has "a".
      // The second sits where the word has "z", which isn't a rule key, so
      // it must be left completely untouched.
      const result = restoreLettersInIpa("aZZZZz", "QYYYYQ", {
        ipaCharToBeReplaced: ["Q"],
        lettersToRestore: { a: "1" },
      });
      expect(result).toBe("1YYYYQ");
    });
  });

  describe("search window scales with candidate width, capped at 3", () => {
    // Synthetic words/ipa so the exact required shift distance is known and
    // controlled. Keys are lowercase throughout (see "word matching is
    // case-insensitive" above for why that now matters).
    it("a 2-character candidate searches up to 2 letters away", () => {
      const result = restoreLettersInIpa("pppppkeqqqqqqq", "aaaaaXYaaa", {
        ipaCharToBeReplaced: ["XY"],
        lettersToRestore: { ke: "done2" },
      });
      expect(result).toBe("aaaaadone2aaa");
    });

    it("a 3-character candidate searches up to 3 letters away", () => {
      const result = restoreLettersInIpa("pppppkeyqqqqqqqq", "aaaaaXYZaa", {
        ipaCharToBeReplaced: ["XYZ"],
        lettersToRestore: { key: "done3" },
      });
      expect(result).toBe("aaaaadone3aa");
    });

    it("a 4-character candidate still only searches up to 3 letters away (the cap)", () => {
      // The matching word content is 4 letters away from the anchor -- one
      // further than the cap allows -- so this must NOT match, even though
      // the candidate is wider than 3 characters.
      const result = restoreLettersInIpa("aatestaaaaaa", "aaaaaaWXYZaa", {
        ipaCharToBeReplaced: ["WXYZ"],
        lettersToRestore: { test: "done4" },
      });
      expect(result).toBe("aaaaaaWXYZaa");
    });
  });

  describe("multiple rules resolved together", () => {
    it("applies two independent rules in a single call", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", [
        { ipaCharToBeReplaced: "ɹ", lettersToRestore: { rr: "ɹɹ" } },
        { ipaCharToBeReplaced: ["æ", "ɛ", "ə", "o"], lettersToRestore: { a: "a" } },
      ]);
      expect(result).toBe("ˈhaɹɹi");
    });

    it("gives the same result regardless of rule order, when rules touch disjoint letters", () => {
      const forward = restoreLettersInIpa("harry", "ˈhɛɹi", [
        { ipaCharToBeReplaced: "ɹ", lettersToRestore: { rr: "ɹɹ" } },
        { ipaCharToBeReplaced: ["æ", "ɛ", "ə", "o"], lettersToRestore: { a: "a" } },
      ]);
      const reversed = restoreLettersInIpa("harry", "ˈhɛɹi", [
        { ipaCharToBeReplaced: ["æ", "ɛ", "ə", "o"], lettersToRestore: { a: "a" } },
        { ipaCharToBeReplaced: "ɹ", lettersToRestore: { rr: "ɹɹ" } },
      ]);
      expect(forward).toBe(reversed);
      expect(forward).toBe("ˈhaɹɹi");
    });

    it("disambiguates two different letter-combinations sharing one candidate pool, by position", () => {
      const result = restoreLettersInIpa("aXXXXb", "PYYYYQ", {
        ipaCharToBeReplaced: ["P", "Q"],
        lettersToRestore: { a: "1", b: "2" },
      });
      expect(result).toBe("1YYYY2");
    });
  });

  describe("position-based disambiguation with repeated letters", () => {
    it("matches three ambiguous vowels in the same word to their nearest candidates independently", () => {
      const result = restoreLettersInIpa("banana", "bəˈnænə", {
        ipaCharToBeReplaced: ["ə", "æ"],
        lettersToRestore: { a: "a" },
      });
      expect(result).toBe("baˈnana");
    });
  });

  describe("overlapping / prefix letter combinations", () => {
    it("lets a longer key claim its span before a shorter key (same rule) can match inside it", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", {
        ipaCharToBeReplaced: "ɹ",
        lettersToRestore: { rr: "ɹɹ", r: "SHOULD_NOT_APPEAR" },
      });
      expect(result).toBe("ˈhɛɹɹi");
    });

    it("still blocks a shorter key even when it's in a different rule object, regardless of array order", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", [
        { ipaCharToBeReplaced: "ɹ", lettersToRestore: { r: "SHOULD_NOT_APPEAR" } },
        { ipaCharToBeReplaced: "ɹ", lettersToRestore: { rr: "ɹɹ" } },
      ]);
      expect(result).toBe("ˈhɛɹɹi");
      expect(result).not.toContain("SHOULD_NOT_APPEAR");
    });

    it("picks the 'eille' branch when eille is actually present in the word", () => {
      const result = restoreLettersInIpa("bouteille", "buˈtɛj", {
        ipaCharToBeReplaced: ["ɛj", "ɛi̯"],
        lettersToRestore: { eil: "ɛl", eille: "ɛi̯l" },
      });
      expect(result).toBe("buˈtɛi̯l");
    });

    it("picks the 'eil' branch when only eil (not eille) is present", () => {
      const result = restoreLettersInIpa("xeilx", "ZɛjZ", {
        ipaCharToBeReplaced: ["ɛj", "ɛi̯"],
        lettersToRestore: { eil: "ɛl", eille: "ɛi̯l" },
      });
      expect(result).toBe("ZɛlZ");
    });
  });

  describe("stress marks", () => {
    it("preserves primary stress in the output", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", {
        ipaCharToBeReplaced: "ɹ",
        lettersToRestore: { rr: "ɹɹ" },
      });
      expect(result[0]).toBe("ˈ");
    });

    it("strips both ˌ and ˈ for position matching, then restores them at the correct spots in the output", () => {
      const result = restoreLettersInIpa("xyz", "ˌaˈbc", {
        ipaCharToBeReplaced: "c",
        lettersToRestore: { z: "C" },
      });
      expect(result).toBe("ˌaˈbC");
    });
  });

  describe("replacement can delete a matched span", () => {
    it("removes the matched IPA span entirely when the replacement is an empty string", () => {
      const result = restoreLettersInIpa("abxcd", "abYcd", {
        ipaCharToBeReplaced: "Y",
        lettersToRestore: { x: "" },
      });
      expect(result).toBe("abcd");
    });
  });

  describe("no-ops / graceful misses", () => {
    it("returns the ipa unchanged if the key never occurs in the word", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", {
        ipaCharToBeReplaced: "ɹ",
        lettersToRestore: { zzz: "ɹɹ" },
      });
      expect(result).toBe("ˈhɛɹi");
    });

    it("returns the ipa unchanged if none of the candidate characters occur in the ipa", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", {
        ipaCharToBeReplaced: "q",
        lettersToRestore: { rr: "ɹɹ" },
      });
      expect(result).toBe("ˈhɛɹi");
    });

    it("returns the ipa unchanged for an empty lettersToRestore map", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", {
        ipaCharToBeReplaced: "ɹ",
        lettersToRestore: {},
      });
      expect(result).toBe("ˈhɛɹi");
    });

    it("returns the ipa unchanged for an empty rules array", () => {
      const result = restoreLettersInIpa("harry", "ˈhɛɹi", []);
      expect(result).toBe("ˈhɛɹi");
    });
  });

  describe("does not mutate its inputs", () => {
    it("never writes to the rules passed in", () => {
      const rule: RestoreIpaRule = { ipaCharToBeReplaced: "ɹ", lettersToRestore: { rr: "ɹɹ" } };
      Object.freeze(rule.lettersToRestore);
      Object.freeze(rule);

      expect(() => restoreLettersInIpa("harry", "ˈhɛɹi", [rule])).not.toThrow();
    });
  });
});

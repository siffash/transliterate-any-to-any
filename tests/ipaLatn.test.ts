import { describe, it, expect } from "vitest";
import { RBT, settings } from "../src/helpers/rbt";
import { ipaLatnRules } from "../src/data/ipa/ipa-latn.rules";

// The Standardized Latin Mapping, plus the IPA symbols that it folds into its letters
const cases = [
  ["a æ e i ɨ o ø u y ʏ", "a ä e i ï o ö u ü ÿ"],
  ["ɛɪ", "ij"],
  ["b d f ɡ h k l m n p q r s t v w x z", "b d f g h k l m n p q r s t v w x z"],
  ["j", "y"],
  ["ʎ ɲ ʃ ʒ", "ľ ń š ž"],
  ["d͡ʒ dʒ d͡z d͡ʑ t͡s t͡ɕ t͡ʃ tʃ", "dž dž dz đ ts ć č č"],
  ["θ ɣ ŋ χ ʔa ·", "th gh ng kh 'a ·"],
  ["ɑ ɐ ɛ ə ɔ œ ʊ ɪ", "a a e e o ö u i"],
  ["ʁ ʀ ɾ ç ɕ ɥ", "r r r x š ü"],
  ["ˈʒɑ̃ːn", "žann"],
  ["ʒɑn miʃɛl fʁɑnsua", "žan mišel fransua"],
] as const;

describe("ipa-latn rules", () => {
  for (const jsImplementation of [true, false]) {
    it.each(cases)(`%s → %s with ${jsImplementation ? "JS" : "native"} RBT`, (ipa, expected) => {
      settings.JS_IMPLEMENTATION = jsImplementation;
      try {
        expect(RBT.fromRules(ipaLatnRules).transliterate(ipa)).toBe(expected);
      } finally {
        settings.JS_IMPLEMENTATION = false;
      }
    });
  }
});

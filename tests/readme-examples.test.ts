import { describe, expect, it } from "vitest";
import { transliterate } from "../src/transliterate";
import { Language, Text } from "../src/types";

const examples: Array<{ from: Language; to: Language; text: Text; expected: Text }> = [
  { from: "mt", to: "lv", text: "Marsaxlokk", expected: "Marsašlok" },
  { from: "fr", to: "ru", text: "Pierre Richard", expected: "Пьер Ришар" },
  { from: "en", to: "ko", text: "Sean Connery", expected: "숀 코너리" },
  { from: "el", to: "hy", text: "Λάρισα", expected: "Լարիսա" },
  { from: "bg", to: "cs", text: "Копривщица", expected: "Koprivštica" },
  { from: "ja", to: "ar", text: "青森", expected: "اوموري" },
  { from: "ko", to: "en", text: ["서울", "부산"], expected: ["Seoul", "Busan"] },
  { from: "zh", to: "bg", text: ["上海", "广州"], expected: ["Шанхай", "Гуанджоу"] },
  { from: "hi", to: "he", text: ["मुंबई", "कोलकाता"], expected: ["מומבאי", "קולקטה"] },
];

describe("README examples", () => {
  for (const { from, to, text, expected } of examples) {
    it(`transliterate ${text.toString()} from ${from} to ${to}`, async () => {
      expect(await transliterate(text, { from, to })).toEqual(expected);
    });
  }
});

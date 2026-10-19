import { describe, expect, it } from "vitest";
import { transliterate } from "../src/transliterate";
import { Language, Text } from "../src/types";

type Example = { from: Language; to: Language; text: Text; expected: Text };

const testExamples = (examples: Example[]) => {
  for (const { from, to, text, expected } of examples) {
    it(`transliterate ${text.toString()} from ${from} to ${to}`, async () => {
      expect(await transliterate(text, { from, to })).toEqual(expected);
    });
  }
};

describe("README examples", () => {
  testExamples([
    { from: "mt", to: "lv", text: "Marsaxlokk", expected: "Marsašlok" },
    { from: "fr", to: "ru", text: "Pierre Richard", expected: "Пьер Ришар" },
    { from: "en", to: "ko", text: "Sean Connery", expected: "숀 코너리" },
    { from: "el", to: "hy", text: "Λάρισα", expected: "Լարիսա" },
    { from: "bg", to: "cs", text: "Копривщица", expected: "Koprivštica" },
    { from: "ja", to: "ar", text: "青森", expected: "اوموري" },
    { from: "ko", to: "en", text: ["서울", "부산"], expected: ["Seoul", "Busan"] },
    { from: "zh", to: "bg", text: ["上海", "广州"], expected: ["Шанхай", "Гуанджоу"] },
    { from: "hi", to: "he", text: ["मुंबई", "कोलकाता"], expected: ["מומבאי", "קולקטה"] },
  ]);
});

describe("Store listing examples", () => {
  testExamples([
    { from: "es", to: "ko", text: "Pablo Picasso", expected: "파블로 피카소" },
    { from: "ja", to: "bg", text: "葛飾北斎", expected: "Кацушика Хокусай" },
    { from: "ar", to: "hi", text: "محمد", expected: "मुहम्मद" },
    { from: "zh", to: "en", text: "北京", expected: "Beijing" },
    {
      from: "es",
      to: "ko",
      text: "Pablo Picasso, Frida Kahlo, Madrid, Barcelona",
      expected: "파블로 피카소, 프리다 칼로, 마드리드, 바르셀로나",
    },
    {
      from: "zh",
      to: "en",
      text: "张伟杰, 周嘉怡, 北京, 上海, 成都",
      expected: "Zhang Weijie, Zhou Jiayi, Beijing, Shanghai, Chengdu",
    },
    {
      from: "it",
      to: "ja",
      text: "Galileo, Firenze, Milano, Napoli",
      expected: "ガリレオ, フィレンツェ, ミラノ, ナポリ",
    },
    {
      from: "hi",
      to: "en",
      text: "ताज महल, राहुल शर्मा, प्रिया पटेल, मुंबई",
      expected: "Taj Mahal, Rahul Sharma, Priya Patel, Mumbai",
    },
    {
      from: "ja",
      to: "en",
      text: "山田太郎, 佐藤花子, 東京, 京都, 大阪",
      expected: "Yamada Taro, Sato Hanako, Tokyo, Kyoto, Osaka",
    },
    { from: "es", to: "ko", text: "Pablo Picasso, Madrid", expected: "파블로 피카소, 마드리드" },
    { from: "it", to: "ja", text: "Galileo, Firenze", expected: "ガリレオ, フィレンツェ" },
  ]);
});

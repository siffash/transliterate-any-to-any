import { Text } from "types";

export const jaKo = async (text: Text) => {
  const { default: Hangul } = await import("hangul-js");
  const { normalizeJa } = await import("helpers/normalizeJa");
  const { jaKoMap } = await import("data/ja/ja-ko.map");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const sortedKeys = Object.keys(jaKoMap).sort((a, b) => b.length - a.length);
  const jaKoPattern = new RegExp(sortedKeys.join("|"), "g");
  const { getKuroshiro } = await import("helpers/getKuroshiro");

  const kuroshiro = await getKuroshiro();

  const UNITS: Record<string, string> = { 町: "정", 村: "촌", 県: "현", 府: "부", 国: "국" };
  const unitMarks = Object.keys(UNITS);
  const UNIT_MARK = 0xe000;
  const GENERICS: Record<string, [RegExp, string]> = {
    湖: [/(?:こ|みずうみ)$/, "호"],
    湾: [/わん$/, "만"],
    山脈: [/さんみゃく$/, "산맥"],
    山地: [/さんち$/, "산지"],
  };
  const GENERIC = new RegExp(`(?<=\\p{sc=Han})(?:${Object.keys(GENERICS).join("|")})$`, "u");
  const NAME_UNITS = [..."市区町村郡県都府"];

  const convert = async (text: string) => {
    const generics: string[] = [];
    const normalized = normalizeJa(text);
    const inName = (segment: string) =>
      NAME_UNITS.some(unit => normalized.includes(segment + unit));
    const hiragana = await wordSplitter(normalized, "ja", async text => {
      if (Object.hasOwn(UNITS, text) && !inName(text))
        return String.fromCharCode(UNIT_MARK + unitMarks.indexOf(text));
      if (Object.hasOwn(GENERICS, text) && !inName(text)) {
        generics.push(GENERICS[text]![1]);
        return "";
      }
      const reading = await kuroshiro.convert(text, { to: "hiragana" });
      const [ending, korean] = GENERICS[text.match(GENERIC)?.[0] ?? ""] ?? [];
      if (!ending || !ending.test(reading) || inName(text)) return reading;
      generics.push(korean!);
      return reading.replace(ending, "\uE010");
    });
    const short = hiragana
      .replace(/\p{sc=Han}/gu, "")
      .replace(
        /([おこごそぞとどのほぼぽもよろをょオコゴソゾトドノホボポモヨロヲョ])[うおウオ](?!(?<=[のノ][うウ])[えエ])/g,
        "$1",
      )
      .replace(/([うくぐすずつづぬふぶぷむゆるゅウクグスズツヅヌフブプムユルュ])[うウ]/g, "$1");
    let jamo = short.replace(jaKoPattern, match => jaKoMap[match]);
    jamo = jamo
      .replace(/(^|[^ㄱ-ㅣ])ㅋ/g, "$1ㄱ")
      .replace(/(^|[^ㄱ-ㅣ])ㅌ/g, "$1ㄷ")
      .replace(/(^|[^ㄱ-ㅣ])ㅊ/g, "$1ㅈ")
      .replace(/([ㅈㅊ])ㅑ/g, "$1ㅏ")
      .replace(/([ㅈㅊ])ㅠ/g, "$1ㅜ")
      .replace(/([ㅈㅊ])ㅛ/g, "$1ㅗ")
      .replace(/([ㄴㅅ])\1(?![ㅏ-ㅣ])/g, "$1");
    return Hangul.assemble(jamo.split(""))
      .replace(/[\uE000-\uE004]/g, mark => UNITS[unitMarks[mark.charCodeAt(0) - UNIT_MARK]!]!)
      .replace(/ ?\uE010/g, () => generics.shift()!);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

import { Text } from "types";

export const koZh = async (text: Text) => {
  const {
    B_MAP,
    BATCHIMS,
    DIRECT_MAP,
    INITIALS,
    IV_MAP,
    SURNAME_MAP,
    SYLLABLE_MAP,
    UNIT_MAP,
    VOWELS,
  } = await import("data/ko/ko-zh.map");
  const { PLACES, UNIT_PLACES } = await import("data/ko/ko-zh_places.map");
  const { RBT } = await import("helpers/rbt");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const HANGUL = /[가-힣]/;
  const WORD = /(?<![가-힣·‧])[가-힣]+(?:‧[가-힣]+)?(?![가-힣·‧])/g;
  const PLACE_NAME = /^[가-힣]+[一-鿿]/;

  const hasOwn = (map: Record<string, string>, key: string) =>
    Object.prototype.hasOwnProperty.call(map, key);

  const convertPlaces = (text: string) =>
    text.replace(WORD, word => {
      const whole = word.replace("‧", "");
      if (hasOwn(PLACES, whole)) {
        return PLACES[whole];
      }
      const [name, unit] = word.split("‧");
      if (!unit) {
        return word;
      }
      const place = hasOwn(UNIT_PLACES, name)
        ? UNIT_PLACES[name]
        : hasOwn(PLACES, name)
          ? PLACES[name]
          : name;
      return place + UNIT_MAP[unit];
    });

  let letters: ReturnType<typeof RBT.fromRules> | undefined;

  const convertSyllables = (text: string) => {
    text = convertPlaces(text);
    let result = "";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const code = char.charCodeAt(0);

      if (char === "·") {
        continue;
      }

      if (code < 0xac00 || code > 0xd7a3) {
        result += char;
        continue;
      }

      const startsWord = !HANGUL.test(text[i - 1] ?? "");
      const givenName =
        text[i - 1] === "·" && HANGUL.test(text[i - 2] ?? "") && !HANGUL.test(text[i - 3] ?? "");
      const surname = startsWord && text[i + 1] === "·" && HANGUL.test(text[i + 2] ?? "");
      const place = startsWord && PLACE_NAME.test(text.slice(i));
      const direct =
        startsWord && !givenName && !place
          ? (surname && SURNAME_MAP[char]) || DIRECT_MAP[char] || SYLLABLE_MAP[char]
          : SYLLABLE_MAP[char] || DIRECT_MAP[char];

      if (direct) {
        result += direct;
        continue;
      }

      const sIdx = code - 0xac00;
      const init =
        INITIALS[Math.floor(sIdx / 588)] === "ㅇ" ? "" : INITIALS[Math.floor(sIdx / 588)];
      const vow = VOWELS[Math.floor((sIdx % 588) / 28)];
      const bat = BATCHIMS[sIdx % 28];

      let syllable = IV_MAP[init + vow] || IV_MAP[init + "a"] || "阿";

      if (bat && B_MAP[bat]) {
        syllable += B_MAP[bat];
      }

      result += syllable;
    }

    return result;
  };

  const convert = (text: string) =>
    normalizeKo(text, convertSyllables, "ipa", { name: "·", unit: "‧", province: "‧" }, text =>
      (letters ??= RBT.fromRules(ipaZhRules)).transliterate(text),
    );

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

import { Text } from "types";

export const koZh = async (text: Text) => {
  const { B_MAP, BATCHIMS, DIRECT_MAP, INITIALS, IV_MAP, SYLLABLE_MAP, VOWELS } =
    await import("data/ko/ko-zh.map");
  const { RBT } = await import("helpers/rbt");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const HANGUL = /[가-힣]/;

  // Converts standalone letters (ㅋㅋㅋ, ㅠㅠ), spelled in IPA; compiled only when the text has any
  let letters: ReturnType<typeof RBT.fromRules> | undefined;

  const convertSyllables = (text: string) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const code = char.charCodeAt(0);

      if (code < 0xac00 || code > 0xd7a3) {
        result += char;
        continue;
      }

      // Surname characters (김 金, 정 郑) apply at the start of a word, but not to a given name
      // split off after a one-syllable surname (김 정은 → 正)
      const startsWord = !HANGUL.test(text[i - 1] ?? "");
      const givenName =
        text[i - 1] === " " && HANGUL.test(text[i - 2] ?? "") && !HANGUL.test(text[i - 3] ?? "");
      const direct =
        startsWord && !givenName
          ? DIRECT_MAP[char] || SYLLABLE_MAP[char]
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

      // Build the syllable core
      let syllable = IV_MAP[init + vow] || IV_MAP[init + "a"] || "阿";

      // Append batchim
      if (bat && B_MAP[bat]) {
        syllable += B_MAP[bat];
      }

      result += syllable;
    }

    return result;
  };

  const convert = (text: string) =>
    normalizeKo(text, convertSyllables, "ipa", text =>
      (letters ??= RBT.fromRules(ipaZhRules)).transliterate(text),
    );

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

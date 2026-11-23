import { Text } from "types";

export const koEn = async (text: Text) => {
  const { mapText } = await import("helpers/convertText");
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("helpers/rbt");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { EN_SURNAMES } = await import("data/ko/ko-names");
  const { koEnRules } = await import("data/ko/ko-en.rules");

  const transliterator = RBT.fromRules(koLatnAssimRules + koEnRules + latnKoHyphenRules);

  const romanize = (text: string) =>
    Aromanize.romanize(
      text
        .replace(
          /(?<![가-힣])([가-힣])·/g,
          (_, surname: string) => `${EN_SURNAMES[surname] ?? surname} `,
        )
        .replace(
          /(?<![가-힣‧·_])[가-힣](?![가-힣‧·_])/g,
          surname => EN_SURNAMES[surname] ?? surname,
        ),
    );

  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "ko", text =>
      normalizeKo(text, romanize, "latn", { name: "·", syllable: "‧", unit: "‧" }),
    );
    return transliterator.transliterate(romanized);
  };

  return mapText(text, convert);
};

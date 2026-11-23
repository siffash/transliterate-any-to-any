import { Text } from "types";

export const koBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koSrRules } = await import("data/ko/ko-sr.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(text, koLatnAssimRules + koSrRules + latnKoHyphenRules, {
    source: words => koLatn(words, { name: "·", syllable: "‧", unit: "․" }),
  });
};

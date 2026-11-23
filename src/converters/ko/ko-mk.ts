import { Text } from "types";

export const koMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koMkRules } = await import("data/ko/ko-mk.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(text, koLatnAssimRules + koMkRules + latnKoHyphenRules, {
    source: words => koLatn(words, { name: "·", syllable: "‧" }),
  });
};

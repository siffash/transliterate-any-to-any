import { Text } from "types";

export const koTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koTgRules } = await import("data/ko/ko-tg.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(text, koLatnAssimRules + koTgRules, {
    source: words => koLatn(words, { name: "·", syllable: "‧", province: "-" }),
  });
};

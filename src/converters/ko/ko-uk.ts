import { Text } from "types";

export const koUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koUkRules } = await import("data/ko/ko-uk.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(text, koLatnAssimRules + koUkRules, {
    source: words => koLatn(words, { name: "·", syllable: "‧" }),
  });
};

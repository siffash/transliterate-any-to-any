import { Text } from "types";

export const koRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koRuRules } = await import("data/ko/ko-ru.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(text, koLatnAssimRules + koRuRules, {
    source: words => koLatn(words, { name: "·", syllable: "‧", province: "-" }),
  });
};

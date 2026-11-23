import { Text } from "types";

export const koBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koBgRules } = await import("data/ko/ko-bg.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(text, koLatnAssimRules + koBgRules, {
    source: words => koLatn(words, { name: "·", syllable: "‧", province: "-" }),
  });
};

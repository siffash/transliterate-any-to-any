import { Text } from "types";

export const koHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koHuRules } = await import("data/ko/ko-hu.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(text, koLatnAssimRules + koHuRules + latnKoHyphenRules, {
    source: words => koLatn(words, { name: "·", unit: "‧" }),
  });
};

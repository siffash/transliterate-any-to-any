import { Text } from "types";

export const koSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koCsRules } = await import("data/ko/ko-cs.rules");
  const { koCsSkRules } = await import("data/ko/ko-cs_sk.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(text, koLatnAssimRules + koCsSkRules + koCsRules + latnKoHyphenRules, {
    source: words => koLatn(words, { name: "·", syllable: "‧", unit: "․" }),
  });
};

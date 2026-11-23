import { Text } from "types";

export const koEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koLatnRules } = await import("data/ko/ko-latn.rules");
  const { koLatnSoulRules } = await import("data/ko/ko-latn_soul.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(
    text,
    koLatnSoulRules + koLatnAssimRules + koLatnRules + latnEtRules + latnKoHyphenRules,
    { source: koLatn },
  );
};

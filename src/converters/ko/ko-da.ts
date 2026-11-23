import { Text } from "types";

export const koDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koLatnRules } = await import("data/ko/ko-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(
    text,
    koLatnAssimRules + koLatnRules + latnIRules + latnDaRules + latnKoHyphenRules,
    { source: koLatn },
  );
};

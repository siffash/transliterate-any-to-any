import { Text } from "types";

export const koEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koLatnRules } = await import("data/ko/ko-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(
    text,
    koLatnAssimRules + koLatnRules + latnIRules + latnShSRules + latnEsRules + latnKoHyphenRules,
    { source: koLatn },
  );
};

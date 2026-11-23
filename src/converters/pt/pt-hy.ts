import { Text } from "types";

export const ptHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { ptLatnDiphthongIRules } = await import("data/pt/pt-latn_diphthong-i.rules");
  const { ptLatnFinalSRules } = await import("data/pt/pt-latn_final-s.rules");
  const { ptLatnReductionRules } = await import("data/pt/pt-latn_reduction.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(
    text,
    ptLatnReductionRules +
      ptLatnDiphthongIRules +
      ptLatnRules +
      ptLatnFinalSRules +
      latnHyRules +
      hyEvRules,
  );
};

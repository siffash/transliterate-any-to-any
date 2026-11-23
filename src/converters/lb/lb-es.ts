import { Text } from "types";

export const lbEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  return convertText(
    text,
    latnSilentHRules + latnIRules + latnShSRules + latnEsRules + latnXRules + latnKQuRules,
    { source: lbLatn },
  );
};

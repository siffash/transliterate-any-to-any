import { Text } from "types";

export const lbCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");
  const { lbLatnXRules } = await import("data/lb/lb-latn_x.rules");
  const { latnCaSRules } = await import("data/latn/latn-ca_s.rules");

  return convertText(text, lbLatnXRules + latnCaRules + latnKQuRules + latnCaSRules, {
    source: lbLatn,
  });
};

import { Text } from "types";

export const caEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnEsCaRules } = await import("data/latn/latn-es_ca.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  return convertText(text, caLatnRules + latnEsCaRules + latnEsRules + latnXRules + latnKQuRules);
};

import { Text } from "types";

export const ptCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");
  const { latnCaSRules } = await import("data/latn/latn-ca_s.rules");

  return convertText(text, ptLatnRules + latnCaRules + latnKQuRules + latnCaSRules);
};

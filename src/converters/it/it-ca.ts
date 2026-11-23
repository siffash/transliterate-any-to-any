import { Text } from "types";

export const itCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");
  const { latnCaSRules } = await import("data/latn/latn-ca_s.rules");

  return convertText(text, itLatnRules + latnCaRules + latnKQuRules + latnCaSRules);
};

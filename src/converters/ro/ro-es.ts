import { Text } from "types";

export const roEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  return convertText(text, roLatnRules + latnIRules + latnEsRules + latnXRules + latnKQuRules);
};

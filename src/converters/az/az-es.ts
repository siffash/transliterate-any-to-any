import { Text } from "types";

export const azEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, azLatnRules + latnIRules + latnEsRules);
};

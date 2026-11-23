import { Text } from "types";

export const azPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, azLatnRules + latnIRules + latnPtRules);
};

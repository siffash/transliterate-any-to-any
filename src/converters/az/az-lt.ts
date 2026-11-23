import { Text } from "types";

export const azLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { azLatnQKRules } = await import("data/az/az-latn_q-k.rules");

  return convertText(text, azLatnQKRules + azLatnRules + latnIRules + latnLtRules);
};

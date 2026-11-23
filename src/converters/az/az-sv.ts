import { Text } from "types";

export const azSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, azLatnRules + latnIRules + latnSvRules);
};

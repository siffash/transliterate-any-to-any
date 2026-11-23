import { Text } from "types";

export const azFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, azLatnRules + latnIRules + latnFiRules);
};

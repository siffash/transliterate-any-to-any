import { Text } from "types";

export const roFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, roLatnRules + latnIRules + latnFiRules);
};

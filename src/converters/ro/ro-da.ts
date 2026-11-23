import { Text } from "types";

export const roDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, roLatnRules + latnIRules + latnDaRules);
};

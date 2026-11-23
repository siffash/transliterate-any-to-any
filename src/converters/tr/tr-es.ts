import { Text } from "types";

export const trEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, trLatnRules + latnIRules + latnEsRules);
};

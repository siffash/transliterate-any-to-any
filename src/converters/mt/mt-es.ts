import { Text } from "types";

export const mtEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, mtLatnRules + latnEsRules);
};

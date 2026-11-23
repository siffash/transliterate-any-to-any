import { Text } from "types";

export const mtDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, mtLatnRules + latnDaRules);
};

import { Text } from "types";

export const mtCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  return convertText(text, mtLatnRules + latnCaRules);
};

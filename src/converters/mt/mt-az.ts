import { Text } from "types";

export const mtAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, mtLatnRules + latnAzRules);
};

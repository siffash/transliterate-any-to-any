import { Text } from "types";

export const mtIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, mtLatnRules + latnIsRules);
};

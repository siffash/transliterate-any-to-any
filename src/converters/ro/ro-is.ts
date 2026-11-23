import { Text } from "types";

export const roIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, roLatnRules + latnIsRules);
};

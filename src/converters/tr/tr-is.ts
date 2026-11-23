import { Text } from "types";

export const trIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, trLatnRules + latnIsRules);
};

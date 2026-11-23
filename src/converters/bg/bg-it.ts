import { Text } from "types";

export const bgIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgItRules } = await import("data/bg/bg-it.rules");

  return convertText(text, bgItRules);
};

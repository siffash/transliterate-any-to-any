import { Text } from "types";

export const hiBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiBnRules } = await import("data/hi/hi-bn.rules");

  return convertText(text, hiBnRules);
};

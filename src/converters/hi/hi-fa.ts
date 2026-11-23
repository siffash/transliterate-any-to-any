import { Text } from "types";

export const hiFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiFaRules } = await import("data/hi/hi-fa.rules");

  return convertText(text, hiFaRules);
};

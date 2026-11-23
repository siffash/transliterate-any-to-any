import { Text } from "types";

export const arFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arFaRules } = await import("data/ar/ar-fa.rules");

  return convertText(text, arFaRules);
};

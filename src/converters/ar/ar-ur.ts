import { Text } from "types";

export const arUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arUrRules } = await import("data/ar/ar-ur.rules");

  return convertText(text, arUrRules);
};

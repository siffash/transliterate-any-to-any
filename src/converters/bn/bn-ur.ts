import { Text } from "types";

export const bnUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnUrRules } = await import("data/bn/bn-ur.rules");

  return convertText(text, bnUrRules);
};

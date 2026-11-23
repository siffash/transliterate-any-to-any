import { Text } from "types";

export const bnEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnEnRules } = await import("data/bn/bn-en.rules");

  return convertText(text, bnEnRules);
};

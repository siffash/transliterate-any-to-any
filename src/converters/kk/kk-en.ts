import { Text } from "types";

export const kkEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkEnRules } = await import("data/kk/kk-en.rules");

  return convertText(text, kkEnRules);
};

import { Text } from "types";

export const tgEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgEnRules } = await import("data/tg/tg-en.rules");

  return convertText(text, tgEnRules);
};

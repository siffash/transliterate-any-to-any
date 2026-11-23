import { Text } from "types";

export const bgEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgEnRules } = await import("data/bg/bg-en.rules");

  return convertText(text, bgEnRules);
};

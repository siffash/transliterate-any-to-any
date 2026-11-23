import { Text } from "types";

export const ukEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukEnRules } = await import("data/uk/uk-en.rules");

  return convertText(text, ukEnRules);
};

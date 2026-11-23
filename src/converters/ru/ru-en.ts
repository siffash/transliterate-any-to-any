import { Text } from "types";

export const ruEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruEnRules } = await import("data/ru/ru-en.rules");

  return convertText(text, ruEnRules);
};

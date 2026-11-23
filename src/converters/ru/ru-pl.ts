import { Text } from "types";

export const ruPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruPlRules } = await import("data/ru/ru-pl.rules");

  return convertText(text, ruPlRules);
};

import { Text } from "types";

export const ruKk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruKkRules } = await import("data/ru/ru-kk.rules");

  return convertText(text, ruKkRules);
};

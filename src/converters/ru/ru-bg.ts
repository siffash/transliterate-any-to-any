import { Text } from "types";

export const ruBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruBgRules } = await import("data/ru/ru-bg.rules");

  return convertText(text, ruBgRules);
};

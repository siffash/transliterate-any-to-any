import { Text } from "types";

export const ruIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruItRules } = await import("data/ru/ru-it.rules");

  return convertText(text, ruItRules);
};

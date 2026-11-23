import { Text } from "types";

export const ruFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruFrRules } = await import("data/ru/ru-fr.rules");

  return convertText(text, ruFrRules);
};

import { Text } from "types";

export const ruMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruMKRules } = await import("data/ru/ru-mk.rules");

  return convertText(text, ruMKRules);
};

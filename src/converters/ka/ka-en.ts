import { Text } from "types";

export const kaEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaEnRules } = await import("data/ka/ka-en.rules");

  return convertText(text, kaEnRules);
};

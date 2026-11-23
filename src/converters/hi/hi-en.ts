import { Text } from "types";

export const hiEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiEnRules } = await import("data/hi/hi-en.rules");

  return convertText(text, hiEnRules);
};

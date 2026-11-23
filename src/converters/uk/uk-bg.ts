import { Text } from "types";

export const ukBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukBgRules } = await import("data/uk/uk-bg.rules");

  return convertText(text, ukBgRules);
};

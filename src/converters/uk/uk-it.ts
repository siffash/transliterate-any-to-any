import { Text } from "types";

export const ukIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukItRules } = await import("data/uk/uk-it.rules");

  return convertText(text, ukItRules);
};

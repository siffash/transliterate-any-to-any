import { Text } from "types";

export const ukPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukPlRules } = await import("data/uk/uk-pl.rules");

  return convertText(text, ukPlRules);
};

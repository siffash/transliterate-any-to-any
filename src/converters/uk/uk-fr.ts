import { Text } from "types";

export const ukFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukFrRules } = await import("data/uk/uk-fr.rules");

  return convertText(text, ukFrRules);
};

import { Text } from "types";

export const fiIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");

  return convertText(text, fiLatnRules + latnItRules);
};

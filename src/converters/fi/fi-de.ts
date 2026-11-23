import { Text } from "types";

export const fiDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, fiLatnRules + latnDeRules);
};

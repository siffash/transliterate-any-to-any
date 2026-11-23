import { Text } from "types";

export const skDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, skLatnRules + latnDeRules);
};

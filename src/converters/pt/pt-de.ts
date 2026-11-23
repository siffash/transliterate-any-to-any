import { Text } from "types";

export const ptDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, ptLatnRules + latnDeRules);
};

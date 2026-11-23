import { Text } from "types";

export const esDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, esLatnRules + latnDeRules);
};

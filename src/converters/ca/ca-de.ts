import { Text } from "types";

export const caDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, caLatnRules + latnDeRules);
};

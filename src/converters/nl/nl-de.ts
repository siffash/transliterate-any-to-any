import { Text } from "types";

export const nlDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, nlLatnRules + latnDeRules);
};

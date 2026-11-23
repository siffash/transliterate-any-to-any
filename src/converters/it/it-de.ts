import { Text } from "types";

export const itDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, itLatnRules + latnDeRules);
};

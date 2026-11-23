import { Text } from "types";

export const plDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, plLatnRules + latnDeRules);
};

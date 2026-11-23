import { Text } from "types";

export const noDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, noLatnRules + latnDeRules);
};

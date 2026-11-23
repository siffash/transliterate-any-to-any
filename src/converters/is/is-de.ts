import { Text } from "types";

export const isDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, isLatnRules + latnDeRules);
};

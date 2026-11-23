import { Text } from "types";

export const ltDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, ltLatnRules + latnDeRules);
};

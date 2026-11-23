import { Text } from "types";

export const svDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, svLatnRules + latnDeRules);
};

import { Text } from "types";

export const lvDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, lvLatnRules + latnDeRules);
};

import { Text } from "types";

export const hrEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, hrLatnRules + latnEnRules);
};

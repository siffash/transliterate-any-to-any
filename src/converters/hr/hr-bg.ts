import { Text } from "types";

export const hrBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, hrLatnRules + latnBgRules);
};

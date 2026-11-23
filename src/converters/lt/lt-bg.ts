import { Text } from "types";

export const ltBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, ltLatnRules + ltLatnPalatalRules + latnBgRules);
};

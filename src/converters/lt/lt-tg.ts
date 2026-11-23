import { Text } from "types";

export const ltTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { ltLatnIeRules } = await import("data/lt/lt-latn_ie.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, ltLatnRules + ltLatnPalatalRules + ltLatnIeRules + latnTgRules);
};

import { Text } from "types";

export const ltMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, ltLatnRules + ltLatnPalatalRules + latnMkRules);
};

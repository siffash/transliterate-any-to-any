import { Text } from "types";

export const ltSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, ltLatnRules + ltLatnPalatalRules + latnSrRules);
};

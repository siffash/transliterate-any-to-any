import { Text } from "types";

export const skBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { latnBgPalatalRules } = await import("data/latn/latn-bg_palatal.rules");

  return convertText(text, csSkLatnPalatalRules + skLatnRules + latnBgPalatalRules + latnBgRules);
};

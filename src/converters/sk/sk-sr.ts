import { Text } from "types";

export const skSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnSrRules } = await import("data/sk/sk-latn_sr.rules");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, skLatnSrRules + csSkLatnPalatalRules + skLatnRules + latnSrRules);
};

import { Text } from "types";

export const skCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  return convertText(text, csSkLatnPalatalRules + skLatnRules + latnCsRules);
};

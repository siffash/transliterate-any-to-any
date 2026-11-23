import { Text } from "types";

export const skMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, csSkLatnPalatalRules + skLatnRules + latnMkRules);
};

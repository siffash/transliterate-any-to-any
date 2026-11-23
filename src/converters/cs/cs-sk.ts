import { Text } from "types";

export const csSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, csSkLatnPalatalRules + csLatnRules + latnSkRules);
};

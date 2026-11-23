import { Text } from "types";

export const kaFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnQKRules } = await import("data/latn/latn_q-k.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, kaLatnRules + latnQKRules + latnFrRules);
};

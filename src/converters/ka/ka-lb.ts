import { Text } from "types";

export const kaLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(text, kaLatnRules + latnLbRules);
};

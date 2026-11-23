import { Text } from "types";

export const lvLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(text, lvLatnRules + latnLbRules);
};

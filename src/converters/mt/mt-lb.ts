import { Text } from "types";

export const mtLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(text, mtLatnRules + latnLbRules);
};

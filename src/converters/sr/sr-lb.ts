import { Text } from "types";

export const srLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(text, srLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnLbRules);
};

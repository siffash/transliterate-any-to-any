import { Text } from "types";

export const bsLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(text, bsLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnLbRules);
};

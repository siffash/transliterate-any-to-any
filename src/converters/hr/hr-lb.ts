import { Text } from "types";

export const hrLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(text, hrLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnLbRules);
};

import { Text } from "types";

export const hrDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, hrLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnDaRules);
};

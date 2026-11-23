import { Text } from "types";

export const hrEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, hrLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnEtRules);
};

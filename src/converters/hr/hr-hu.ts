import { Text } from "types";

export const hrHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, hrLatnRules + latnSlavicLjRules + latnHuRules);
};

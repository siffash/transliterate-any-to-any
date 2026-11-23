import { Text } from "types";

export const bsHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, bsLatnRules + latnSlavicLjRules + latnHuRules);
};

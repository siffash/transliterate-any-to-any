import { Text } from "types";

export const slHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, slLatnRules + latnSlavicLjRules + latnHuRules);
};

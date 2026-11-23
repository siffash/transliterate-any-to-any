import { Text } from "types";

export const srHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, srLatnRules + latnSlavicLjRules + latnHuRules);
};

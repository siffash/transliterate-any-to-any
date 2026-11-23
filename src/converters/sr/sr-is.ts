import { Text } from "types";

export const srIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, srLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnIsRules);
};

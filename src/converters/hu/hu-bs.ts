import { Text } from "types";

export const huBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, huLatnRules + huLatnYRules + huLatnGyRules + latnBsRules);
};

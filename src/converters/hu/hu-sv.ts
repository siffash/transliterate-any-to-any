import { Text } from "types";

export const huSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, huLatnRules + huLatnYRules + huLatnGyRules + latnSvRules);
};

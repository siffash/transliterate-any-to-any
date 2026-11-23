import { Text } from "types";

export const huNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(text, huLatnRules + huLatnYRules + huLatnGyRules + latnNlRules);
};

import { Text } from "types";

export const huSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  return convertText(text, huLatnRules + huLatnYRules + huLatnGyRules + latnSlRules);
};

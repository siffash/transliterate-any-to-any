import { Text } from "types";

export const huEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnElRules } = await import("data/hu/hu-latn_el.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, huLatnRules + huLatnYRules + huLatnElRules + latnElRules);
};

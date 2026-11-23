import { Text } from "types";

export const hyEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnYeRules } = await import("data/latn/latn_ye.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, hyLatnRules + latnYeRules + latnElRules);
};

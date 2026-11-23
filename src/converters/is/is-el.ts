import { Text } from "types";

export const isEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnTlRules } = await import("data/is/is-latn_tl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, isLatnTlRules + isLatnRules + latnElRules);
};

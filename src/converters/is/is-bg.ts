import { Text } from "types";

export const isBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");
  const { isLatnTlRules } = await import("data/is/is-latn_tl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, isLatnTlRules + isLatnURules + isLatnRules + latnBgRules);
};

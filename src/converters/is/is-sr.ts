import { Text } from "types";

export const isSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { isLatnBRules } = await import("data/is/is-latn_b.rules");
  const { isLatnSrRules } = await import("data/is/is-latn_sr.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");

  return convertText(text, isLatnBRules + isLatnURules + isLatnRules + isLatnSrRules + latnSrRules);
};

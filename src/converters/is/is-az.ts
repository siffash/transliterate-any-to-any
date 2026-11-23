import { Text } from "types";

export const isAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { isLatnBRules } = await import("data/is/is-latn_b.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");

  return convertText(text, isLatnBRules + isLatnURules + isLatnRules + latnAzRules);
};

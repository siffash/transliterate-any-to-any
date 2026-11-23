import { Text } from "types";

export const isSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { isLatnBRules } = await import("data/is/is-latn_b.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, isLatnBRules + isLatnRules + latnSqRules);
};

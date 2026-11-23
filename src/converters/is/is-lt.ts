import { Text } from "types";

export const isLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { isLatnBRules } = await import("data/is/is-latn_b.rules");
  const { isLatnDlRules } = await import("data/is/is-latn_dl.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  return convertText(text, isLatnBRules + isLatnDlRules + isLatnRules + latnLtRules);
};

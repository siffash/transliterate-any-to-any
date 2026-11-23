import { Text } from "types";

export const hyLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnGhHRules } = await import("data/latn/latn_gh-h.rules");

  return convertText(text, hyLatnRules + latnGhHRules + latnLvRules);
};

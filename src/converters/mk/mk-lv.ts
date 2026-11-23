import { Text } from "types";

export const mkLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { mkLatnLvRules } = await import("data/mk/mk-latn_lv.rules");

  return convertText(text, mkLatnRules + mkLatnLvRules + latnLvRules);
};

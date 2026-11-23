import { Text } from "types";

export const isLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { isLatnBRules } = await import("data/is/is-latn_b.rules");
  const { isLatnDlRules } = await import("data/is/is-latn_dl.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");

  return convertText(
    text,
    isLatnBRules + isLatnDlRules + isLatnRules + latnLvUmlautRules + latnLvRules,
  );
};

import { Text } from "types";

export const fiLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");
  const { fiEtLatnLvRules } = await import("data/latn/fi_et-latn_lv.rules");

  return convertText(text, fiEtLatnLvRules + fiLatnRules + latnLvUmlautRules + latnLvRules);
};

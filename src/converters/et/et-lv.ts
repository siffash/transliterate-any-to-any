import { Text } from "types";

export const etLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");
  const { latnIERules } = await import("data/latn/latn_i-e.rules");
  const { fiEtLatnLvRules } = await import("data/latn/fi_et-latn_lv.rules");
  const { etLatnLvRules } = await import("data/et/et-latn_lv.rules");

  return convertText(
    text,
    fiEtLatnLvRules + etLatnRules + etLatnLvRules + latnIERules + latnLvUmlautRules + latnLvRules,
  );
};

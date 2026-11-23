import { Text } from "types";

export const sqLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");
  const { sqLatnLvRules } = await import("data/sq/sq-latn_lv.rules");

  return convertText(
    text,
    sqLatnFinalERules + sqLatnLvRules + sqLatnRules + latnLvUmlautRules + latnLvRules,
  );
};

import { Text } from "types";

export const esLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { esLatnYHoldRules } = await import("data/es/es-latn_y-hold.rules");
  const { esLatnLvRules } = await import("data/es/es-latn_lv.rules");
  const { esLatnYRestoreRules } = await import("data/es/es-latn_y-restore.rules");

  const transliterator = RBT.fromRules(
    esLatnYHoldRules + esLatnRules + esLatnLvRules + esLatnYRestoreRules + latnLvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

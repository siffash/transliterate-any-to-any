import { Text } from "types";

export const plLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { plLatnLvRules } = await import("data/pl/pl-latn_lv.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  const transliterator = RBT.fromRules(
    plLatnLvRules + plLatnRules + latnHoldRestoreRules + latnLvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

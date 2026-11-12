import { Text } from "types";

export const bgLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnIjaRules } = await import("data/bg/bg-latn_ija.rules");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  const transliterator = RBT.fromRules(
    bgLatnIjaRules + bgLatnRules + latnLvRules + latnJRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

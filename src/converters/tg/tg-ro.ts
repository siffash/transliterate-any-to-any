import { Text } from "types";

export const tgRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  const transliterator = RBT.fromRules(
    tgLatnRules + latnQHoldRules + latnRoRules + latnQRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

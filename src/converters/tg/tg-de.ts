import { Text } from "types";

export const tgDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnIjRules } = await import("data/tg/tg-latn_ij.rules");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  const transliterator = RBT.fromRules(
    tgLatnIjRules + tgLatnRules + latnGGhRules + latnQHoldRules + latnDeRules + latnQRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

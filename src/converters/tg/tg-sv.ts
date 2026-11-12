import { Text } from "types";

export const tgSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  const transliterator = RBT.fromRules(
    tgLatnRules + latnDzjRules + latnQHoldRules + latnSvRules + latnQRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

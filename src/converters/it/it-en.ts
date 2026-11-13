import { Text } from "types";

export const itEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itRoLatnGhRules } = await import("data/latn/it_ro-latn_gh.rules");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYHoldRules } = await import("data/it/it-latn_y-hold.rules");
  const { itLatnYRestoreRules } = await import("data/it/it-latn_y-restore.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  const transliterator = RBT.fromRules(
    itLatnYHoldRules + itRoLatnGhRules + itLatnRules + itLatnYRestoreRules + latnEnRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

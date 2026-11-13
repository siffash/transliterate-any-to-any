import { Text } from "types";

export const deLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { deLatnDtRules } = await import("data/de/de-latn_dt.rules");
  const { deLatnEiRules } = await import("data/de/de-latn_ei.rules");
  const { deLatnEiRestoreRules } = await import("data/de/de-latn_ei-restore.rules");
  const { latnLtOeRules } = await import("data/latn/latn-lt_oe.rules");

  const transliterator = RBT.fromRules(
    deLatnEiRules +
      deLatnRules +
      deLatnDtRules +
      deLatnEiRestoreRules +
      latnLtOeRules +
      latnLtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

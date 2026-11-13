import { Text } from "types";

export const deLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");
  const { deLatnDtRules } = await import("data/de/de-latn_dt.rules");
  const { deLatnEiRules } = await import("data/de/de-latn_ei.rules");
  const { deLatnLvRules } = await import("data/de/de-latn_lv.rules");
  const { deLatnLvLongRules } = await import("data/de/de-latn_lv-long.rules");
  const { deLatnEiRestoreRules } = await import("data/de/de-latn_ei-restore.rules");

  const transliterator = RBT.fromRules(
    deLatnEiRules +
      deLatnLvLongRules +
      deLatnRules +
      deLatnDtRules +
      deLatnLvRules +
      deLatnEiRestoreRules +
      latnLvUmlautRules +
      latnLvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

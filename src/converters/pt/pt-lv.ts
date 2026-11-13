import { Text } from "types";

export const ptLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { ptLatnSaoRules } = await import("data/pt/pt-latn_sao.rules");
  const { ptLatnLvRules } = await import("data/pt/pt-latn_lv.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { ptLatnSRules } = await import("data/pt/pt-latn_s.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  const transliterator = RBT.fromRules(
    ptLatnSaoRules +
      ptLatnLvRules +
      ptLatnSRules +
      ptLatnRules +
      latnHoldRestoreRules +
      latnLvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

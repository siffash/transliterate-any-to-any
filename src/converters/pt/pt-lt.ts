import { Text } from "types";

export const ptLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { ptLatnSaoRules } = await import("data/pt/pt-latn_sao.rules");
  const { ptLatnLtRules } = await import("data/pt/pt-latn_lt.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { ptLatnSRules } = await import("data/pt/pt-latn_s.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  const transliterator = RBT.fromRules(
    ptLatnSaoRules +
      ptLatnLtRules +
      ptLatnSRules +
      ptLatnRules +
      latnHoldRestoreRules +
      latnLtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

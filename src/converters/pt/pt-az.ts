import { Text } from "types";

export const ptAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { ptLatnSaoRules } = await import("data/pt/pt-latn_sao.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { ptLatnSRules } = await import("data/pt/pt-latn_s.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");
  const { latnAyRules } = await import("data/latn/latn_ay.rules");

  const transliterator = RBT.fromRules(
    ptLatnSaoRules + ptLatnSRules + ptLatnRules + latnHoldRestoreRules + latnAyRules + latnAzRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

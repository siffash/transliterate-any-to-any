import { Text } from "types";

export const bgLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnIjaRules } = await import("data/bg/bg-latn_ija.rules");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnLtIaRules } = await import("data/latn/latn-lt_ia.rules");
  const { latnIaRules } = await import("data/latn/latn_ia.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  const transliterator = RBT.fromRules(
    bgLatnIjaRules + bgLatnRules + latnLtIaRules + latnIaRules + latnLtRules + latnJRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

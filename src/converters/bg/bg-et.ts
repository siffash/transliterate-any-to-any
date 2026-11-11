import { Text } from "types";

export const bgEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgSchwaCaronRules } = await import("data/bg/bg_schwa-caron.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");
  const { latnCRestoreRules } = await import("data/latn/latn_c-restore.rules");
  const { latnCHoldRules } = await import("data/latn/latn_c-hold.rules");

  const transliterator = RBT.fromRules(
    bgSchwaCaronRules + bgLatnRules + latnCHoldRules + latnEtRules + latnCRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

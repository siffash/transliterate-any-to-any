import { Text } from "types";

export const sqAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { sqLatnRrRules } = await import("data/sq/sq-latn_rr.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");
  const { sqLatnQRules } = await import("data/sq/sq-latn_q.rules");

  const transliterator = RBT.fromRules(
    sqLatnFinalERules +
      sqLatnRrRules +
      sqLatnRules +
      sqLatnQRules +
      latnHoldRestoreRules +
      latnAzRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

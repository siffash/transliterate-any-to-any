import { Text } from "types";

export const plSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { plLatnSrRules } = await import("data/pl/pl-latn_sr.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  const transliterator = RBT.fromRules(
    plLatnSrRules + plLatnRules + latnHoldRestoreRules + latnSrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

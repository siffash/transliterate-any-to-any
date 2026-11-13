import { Text } from "types";

export const esSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { esLatnSrHoldRules } = await import("data/es/es-latn_sr-hold.rules");
  const { esLatnSrRestoreRules } = await import("data/es/es-latn_sr-restore.rules");

  const transliterator = RBT.fromRules(
    esLatnSrHoldRules + esLatnRules + esLatnSrRestoreRules + latnSrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

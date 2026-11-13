import { Text } from "types";

export const esLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { esLatnLtHoldRules } = await import("data/es/es-latn_lt-hold.rules");
  const { esCaLatnLtRules } = await import("data/latn/es_ca-latn_lt.rules");
  const { esLatnLtRestoreRules } = await import("data/es/es-latn_lt-restore.rules");

  const transliterator = RBT.fromRules(
    esLatnLtHoldRules + esLatnRules + esCaLatnLtRules + latnLtRules + esLatnLtRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

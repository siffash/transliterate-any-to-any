import { Text } from "types";

export const ruEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnEtCyrlRules } = await import("data/latn/latn-et_cyrl.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules +
      latnSeparatorRules +
      latnAiRules +
      latnEtCyrlRules +
      latnEtRules +
      latnJRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

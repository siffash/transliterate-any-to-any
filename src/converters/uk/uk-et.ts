import { Text } from "types";

export const ukEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukLatnJoRules } = await import("data/uk/uk-latn_jo.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnEtCyrlRules } = await import("data/latn/latn-et_cyrl.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules +
      ukLatnJoRules +
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

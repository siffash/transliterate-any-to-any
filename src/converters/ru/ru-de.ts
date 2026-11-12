import { Text } from "types";

export const ruDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnDeCyrlRules } = await import("data/latn/latn-de_cyrl.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnDeCyrlRestoreRules } = await import("data/latn/latn-de_cyrl-restore.rules");
  const { latnKsXRules } = await import("data/latn/latn_ks-x.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules +
      latnSeparatorRules +
      latnIjRules +
      latnAiRules +
      latnDeCyrlRules +
      latnDeRules +
      latnDeCyrlRestoreRules +
      latnKsXRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const ruFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjIRules } = await import("data/latn/latn_ij-i.rules");
  const { ruLatnYiRules } = await import("data/ru/ru-latn_yi.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules +
      latnSeparatorRules +
      latnIjIRules +
      ruLatnYiRules +
      latnFiRules +
      latnJRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

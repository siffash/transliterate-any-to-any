import { Text } from "types";

export const ruTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnYjIRules } = await import("data/latn/latn_yj-i.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + latnSeparatorRules + latnYjIRules + latnIjRules + latnTrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

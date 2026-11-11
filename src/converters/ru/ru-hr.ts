import { Text } from "types";

export const ruHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { ruLatnIjRules } = await import("data/ru/ru-latn_ij.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + latnSeparatorRules + ruLatnIjRules + latnHrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const ruFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { ruLatnIjRules } = await import("data/ru/ru-latn_ij.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + latnSeparatorRules + ruLatnIjRules + latnFiRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

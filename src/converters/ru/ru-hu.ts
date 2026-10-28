import { Text } from "types";

export const ruHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { ruLatnSeparatorRules } = await import("data/ru/ru-latn_separator.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  const transliterator = RBT.fromRules(ruLatnRules + ruLatnSeparatorRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const ruHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnHuRules } = await import("data/ru/ru-latn_hu.rules");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");
  const { ruHuRules } = await import("data/ru/ru-hu.rules");
  const { ruHuLnRules } = await import("data/ru/ru-hu_ln.rules");

  const transliterator = RBT.fromRules(
    ruLatnHuRules + ruLatnRules + latnSeparatorRules + latnHuRules + ruHuRules + ruHuLnRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

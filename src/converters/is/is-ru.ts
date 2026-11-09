import { Text } from "types";

export const isRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");
  const { isLatnDlRules } = await import("data/is/is-latn_dl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");

  const transliterator = RBT.fromRules(
    isLatnDlRules + isLatnURules + isLatnRules + latnRuRules + ruLlRules + ruLRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

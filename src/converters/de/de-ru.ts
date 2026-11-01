import { Text } from "types";

export const deRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");
  const { deLatnRuRules } = await import("data/de/de-latn_ru.rules");
  const { deLatnRuHRules } = await import("data/de/de-latn_ru-h.rules");

  const transliterator = RBT.fromRules(
    deLatnRuHRules + deLatnRules + latnRuRules + ruLlRules + ruLRules + deLatnRuRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

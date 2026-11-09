import { Text } from "types";

export const itRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnGgRules } = await import("data/it/it-latn_gg.rules");
  const { itLatnYeRules } = await import("data/it/it-latn_ye.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");

  const transliterator = RBT.fromRules(
    itLatnRules + itLatnYeRules + itLatnGgRules + latnRuRules + ruLRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const svRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");

  const transliterator = RBT.fromRules(
    svLatnRules + latnSilentHRules + latnRuRules + ruLlRules + ruLRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

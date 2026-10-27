import { Text } from "types";

export const hyRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { hyLatnRuRules } = await import("data/hy/hy-latn_ru.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnRuRules + hyLatnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

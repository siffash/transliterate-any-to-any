import { Text } from "types";

export const kkRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("data/kk-latn.rules");
  const { latnRuRules } = await import("data/latn-ru.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const srRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srLatnRules } = await import("data/sr-latn.rules");
  const { latnRuRules } = await import("data/latn-ru.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

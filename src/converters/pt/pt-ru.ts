import { Text } from "types";

export const ptRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("data/pt-latn.rules");
  const { latnRuRules } = await import("data/latn-ru.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

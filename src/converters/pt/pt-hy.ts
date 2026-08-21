import { Text } from "types";

export const ptHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const ptKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

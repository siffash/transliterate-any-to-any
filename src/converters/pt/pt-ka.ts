import { Text } from "types";

export const ptKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

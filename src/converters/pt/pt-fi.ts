import { Text } from "types";

export const ptFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

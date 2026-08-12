import { Text } from "types";

export const ptFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("data/pt-latn.rules");
  const { latnFrRules } = await import("data/latn-fr.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

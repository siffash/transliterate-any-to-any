import { Text } from "types";

export const ptSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("data/pt-latn.rules");
  const { latnSrRules } = await import("data/latn-sr.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

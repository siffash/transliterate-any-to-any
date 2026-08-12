import { Text } from "types";

export const ptCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("constants/pt-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const ptTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("constants/pt-latn.rules");
  const { latnTrRules } = await import("constants/latn-tr.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

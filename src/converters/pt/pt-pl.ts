import { Text } from "types";

export const ptPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("constants/pt-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

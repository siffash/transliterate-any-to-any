import { Text } from "types";

export const ptEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("constants/pt-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

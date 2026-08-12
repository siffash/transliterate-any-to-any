import { Text } from "types";

export const itAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnAzRules } = await import("constants/latn-az.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

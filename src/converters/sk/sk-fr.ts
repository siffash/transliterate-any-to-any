import { Text } from "types";

export const skFr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const csMk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { csLatnRules } = await import("constants/cs-latn.rules");
  const { latnMkRules } = await import("constants/latn-mk.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

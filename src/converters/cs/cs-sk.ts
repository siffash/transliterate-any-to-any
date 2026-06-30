import { Text } from "types";

export const csSk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { csLatnRules } = await import("constants/cs-latn.rules");
  const { latnSkRules } = await import("constants/latn-sk.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

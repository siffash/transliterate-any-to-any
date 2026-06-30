import { Text } from "types";

export const slSk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { slLatnRules } = await import("constants/sl-latn.rules");
  const { latnSkRules } = await import("constants/latn-sk.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const bsFi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

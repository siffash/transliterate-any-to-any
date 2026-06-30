import { Text } from "types";

export const huUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

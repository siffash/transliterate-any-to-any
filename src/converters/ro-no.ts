import { Text } from "types";

export const roNo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnNoRules } = await import("constants/latn-no.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

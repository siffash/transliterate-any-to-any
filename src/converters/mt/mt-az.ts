import { Text } from "types";

export const mtAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnAzRules } = await import("constants/latn-az.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

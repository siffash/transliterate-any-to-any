import { Text } from "types";

export const roPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

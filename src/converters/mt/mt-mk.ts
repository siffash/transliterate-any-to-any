import { Text } from "types";

export const mtMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

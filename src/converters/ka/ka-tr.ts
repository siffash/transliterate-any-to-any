import { Text } from "types";

export const kaTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

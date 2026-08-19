import { Text } from "types";

export const kaBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

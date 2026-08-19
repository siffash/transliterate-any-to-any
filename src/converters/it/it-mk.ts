import { Text } from "types";

export const itMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const itSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

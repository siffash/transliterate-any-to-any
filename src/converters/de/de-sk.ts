import { Text } from "types";

export const deSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

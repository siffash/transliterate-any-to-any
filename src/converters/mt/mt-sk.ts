import { Text } from "types";

export const mtSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

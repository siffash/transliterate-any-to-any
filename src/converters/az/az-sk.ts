import { Text } from "types";

export const azSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("data/az-latn.rules");
  const { latnSkRules } = await import("data/latn-sk.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

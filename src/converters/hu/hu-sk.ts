import { Text } from "types";

export const huSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnSkRules } = await import("constants/latn-sk.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

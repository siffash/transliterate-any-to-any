import { Text } from "types";

export const huIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("data/hu-latn.rules");
  const { latnIsRules } = await import("data/latn-is.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const trIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("data/tr-latn.rules");
  const { latnIsRules } = await import("data/latn-is.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

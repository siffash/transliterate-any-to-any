import { Text } from "types";

export const srIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srLatnRules } = await import("data/sr-latn.rules");
  const { latnItRules } = await import("data/latn-it.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

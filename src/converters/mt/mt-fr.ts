import { Text } from "types";

export const mtFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

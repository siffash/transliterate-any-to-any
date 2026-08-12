import { Text } from "types";

export const fiKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("data/fi-latn.rules");
  const { latnKaRules } = await import("data/latn-ka.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

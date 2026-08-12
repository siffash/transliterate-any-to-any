import { Text } from "types";

export const svKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("data/sv-latn.rules");
  const { latnKaRules } = await import("data/latn-ka.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

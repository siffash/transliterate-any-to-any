import { Text } from "types";

export const ukKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

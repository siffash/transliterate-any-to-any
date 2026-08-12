import { Text } from "types";

export const esKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("data/es-latn.rules");
  const { latnKaRules } = await import("data/latn-ka.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

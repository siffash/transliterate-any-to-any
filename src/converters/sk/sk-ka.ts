import { Text } from "types";

export const skKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("data/sk-latn.rules");
  const { latnKaRules } = await import("data/latn-ka.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

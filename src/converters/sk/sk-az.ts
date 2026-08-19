import { Text } from "types";

export const skAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

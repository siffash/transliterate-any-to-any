import { Text } from "types";

export const skFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const skHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnHyRules } = await import("constants/latn-hy.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

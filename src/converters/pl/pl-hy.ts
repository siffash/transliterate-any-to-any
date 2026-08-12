import { Text } from "types";

export const plHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnHyRules } = await import("constants/latn-hy.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

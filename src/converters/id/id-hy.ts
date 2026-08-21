import { Text } from "types";

export const idHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idLatnRules } = await import("data/id/id-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

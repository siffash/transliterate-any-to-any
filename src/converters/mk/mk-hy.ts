import { Text } from "types";

export const mkHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

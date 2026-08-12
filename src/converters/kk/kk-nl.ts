import { Text } from "types";

export const kkNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("data/kk-latn.rules");
  const { latnNlRules } = await import("data/latn-nl.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

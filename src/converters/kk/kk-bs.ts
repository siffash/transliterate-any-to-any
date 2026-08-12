import { Text } from "types";

export const kkBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("data/kk-latn.rules");
  const { latnBsRules } = await import("data/latn-bs.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

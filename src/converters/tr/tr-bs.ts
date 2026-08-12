import { Text } from "types";

export const trBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("data/tr-latn.rules");
  const { latnBsRules } = await import("data/latn-bs.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

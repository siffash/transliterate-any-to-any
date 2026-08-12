import { Text } from "types";

export const slBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("data/sl-latn.rules");
  const { latnBsRules } = await import("data/latn-bs.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const srBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srLatnRules } = await import("constants/sr-latn.rules");
  const { latnBsRules } = await import("constants/latn-bs.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

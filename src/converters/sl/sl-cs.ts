import { Text } from "types";

export const slCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("constants/sl-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

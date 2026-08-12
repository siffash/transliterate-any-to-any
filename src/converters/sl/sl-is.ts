import { Text } from "types";

export const slIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("data/sl-latn.rules");
  const { latnIsRules } = await import("data/latn-is.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

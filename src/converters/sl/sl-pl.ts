import { Text } from "types";

export const slPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("data/sl-latn.rules");
  const { latnPlRules } = await import("data/latn-pl.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

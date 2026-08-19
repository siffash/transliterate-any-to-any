import { Text } from "types";

export const caPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

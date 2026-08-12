import { Text } from "types";

export const deIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("data/de-latn.rules");
  const { latnIsRules } = await import("data/latn-is.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

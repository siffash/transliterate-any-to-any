import { Text } from "types";

export const nlIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

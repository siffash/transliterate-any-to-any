import { Text } from "types";

export const nlMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

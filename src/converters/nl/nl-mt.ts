import { Text } from "types";

export const nlMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

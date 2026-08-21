import { Text } from "types";

export const idMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idLatnRules } = await import("data/id/id-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

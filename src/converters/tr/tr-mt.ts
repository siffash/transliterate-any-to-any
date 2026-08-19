import { Text } from "types";

export const trMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

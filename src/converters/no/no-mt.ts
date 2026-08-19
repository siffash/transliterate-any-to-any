import { Text } from "types";

export const noMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

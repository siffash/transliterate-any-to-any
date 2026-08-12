import { Text } from "types";

export const msMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("data/ms-latn.rules");
  const { latnMtRules } = await import("data/latn-mt.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

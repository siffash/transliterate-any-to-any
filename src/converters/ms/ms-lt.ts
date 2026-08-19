import { Text } from "types";

export const msLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("data/ms/ms-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

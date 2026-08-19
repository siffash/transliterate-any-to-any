import { Text } from "types";

export const trLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

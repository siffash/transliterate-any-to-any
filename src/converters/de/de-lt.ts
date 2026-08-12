import { Text } from "types";

export const deLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("data/de-latn.rules");
  const { latnLtRules } = await import("data/latn-lt.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

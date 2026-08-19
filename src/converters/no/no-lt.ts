import { Text } from "types";

export const noLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

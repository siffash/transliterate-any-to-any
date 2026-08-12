import { Text } from "types";

export const noNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("data/no-latn.rules");
  const { latnNlRules } = await import("data/latn-nl.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

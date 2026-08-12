import { Text } from "types";

export const hyNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("data/hy-latn.rules");
  const { latnNlRules } = await import("data/latn-nl.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

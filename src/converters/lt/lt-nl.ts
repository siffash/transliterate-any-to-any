import { Text } from "types";

export const ltNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

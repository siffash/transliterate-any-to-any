import { Text } from "types";

export const bgNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const ruSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("data/ru-latn.rules");
  const { latnSkRules } = await import("data/latn-sk.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

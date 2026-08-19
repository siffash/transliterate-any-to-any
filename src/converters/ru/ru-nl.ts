import { Text } from "types";

export const ruNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

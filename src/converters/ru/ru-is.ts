import { Text } from "types";

export const ruIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

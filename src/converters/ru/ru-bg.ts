import { Text } from "types";

export const ruBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruBgRules } = await import("data/ru/ru-bg.rules");

  const transliterator = RBT.fromRules(ruBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

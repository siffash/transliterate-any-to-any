import { Text } from "types";

export const ruTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { ruTgShchRules } = await import("data/ru/ru-tg_shch.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnTgRules + ruTgShchRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const svTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnTgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

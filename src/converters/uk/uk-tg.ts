import { Text } from "types";

export const ukTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnTgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const roMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

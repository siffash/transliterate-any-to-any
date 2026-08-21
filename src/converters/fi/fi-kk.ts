import { Text } from "types";

export const fiKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

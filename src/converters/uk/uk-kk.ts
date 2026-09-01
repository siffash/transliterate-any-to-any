import { Text } from "types";

export const ukKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukKkRules } = await import("data/uk/uk-kk.rules");

  const transliterator = RBT.fromRules(ukKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

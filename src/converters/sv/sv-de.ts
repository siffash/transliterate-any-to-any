import { Text } from "types";

export const svDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

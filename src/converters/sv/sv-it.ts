import { Text } from "types";

export const svIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

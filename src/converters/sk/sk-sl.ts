import { Text } from "types";

export const skSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

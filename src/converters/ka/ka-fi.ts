import { Text } from "types";

export const kaFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("data/ka-latn.rules");
  const { latnFiRules } = await import("data/latn-fi.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

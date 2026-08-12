import { Text } from "types";

export const kaRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("data/ka-latn.rules");
  const { latnRoRules } = await import("data/latn-ro.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

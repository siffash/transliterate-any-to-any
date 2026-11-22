import { Text } from "types";

export const kaSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");
  const { latnSlIjRules } = await import("data/latn/latn-sl_ij.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnSlRules + latnSlIjRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

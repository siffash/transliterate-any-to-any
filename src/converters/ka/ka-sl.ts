import { Text } from "types";

export const kaSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("constants/ka-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const kaCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("constants/ka-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

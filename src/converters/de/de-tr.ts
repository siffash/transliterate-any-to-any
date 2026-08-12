import { Text } from "types";

export const deTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnTrRules } = await import("constants/latn-tr.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

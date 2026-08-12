import { Text } from "types";

export const itFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

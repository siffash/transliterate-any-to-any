import { Text } from "types";

export const bsKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnKaRules } = await import("constants/latn-ka.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

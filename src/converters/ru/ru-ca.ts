import { Text } from "types";

export const ruCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnCaRules } = await import("constants/latn-ca.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

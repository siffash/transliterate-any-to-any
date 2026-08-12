import { Text } from "types";

export const ruFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

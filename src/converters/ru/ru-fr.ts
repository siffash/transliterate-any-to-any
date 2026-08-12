import { Text } from "types";

export const ruFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

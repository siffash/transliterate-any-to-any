import { Text } from "types";

export const ruSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnSvRules } = await import("constants/latn-sv.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

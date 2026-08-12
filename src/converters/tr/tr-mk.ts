import { Text } from "types";

export const trMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnMkRules } = await import("constants/latn-mk.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

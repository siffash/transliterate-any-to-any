import { Text } from "types";

export const trMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("data/tr-latn.rules");
  const { latnMkRules } = await import("data/latn-mk.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

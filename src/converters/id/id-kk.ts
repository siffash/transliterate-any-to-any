import { Text } from "types";

export const idKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("data/id-latn.rules");
  const { latnKkRules } = await import("data/latn-kk.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

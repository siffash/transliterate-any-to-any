import { Text } from "types";

export const itKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("data/it-latn.rules");
  const { latnKkRules } = await import("data/latn-kk.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

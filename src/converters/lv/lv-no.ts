import { Text } from "types";

export const lvNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("data/lv-latn.rules");
  const { latnNoRules } = await import("data/latn-no.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

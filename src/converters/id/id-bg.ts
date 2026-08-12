import { Text } from "types";

export const idBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("data/id-latn.rules");
  const { latnBgRules } = await import("data/latn-bg.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

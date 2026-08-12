import { Text } from "types";

export const idFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("data/id-latn.rules");
  const { latnFrRules } = await import("data/latn-fr.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

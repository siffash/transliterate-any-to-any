import { Text } from "types";

export const idEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("data/id/id-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

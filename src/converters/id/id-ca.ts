import { Text } from "types";

export const idCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("data/id/id-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

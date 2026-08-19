import { Text } from "types";

export const trCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const ptCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnCaSRules } = await import("data/latn/latn-ca_s.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnCaRules + latnCaSRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

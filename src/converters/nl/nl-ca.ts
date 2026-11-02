import { Text } from "types";

export const nlCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnCaSRules } = await import("data/latn/latn-ca_s.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnCaRules + latnCaSRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

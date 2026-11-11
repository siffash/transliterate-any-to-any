import { Text } from "types";

export const itCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");
  const { latnCaSRules } = await import("data/latn/latn-ca_s.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnCaRules + latnKQuRules + latnCaSRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

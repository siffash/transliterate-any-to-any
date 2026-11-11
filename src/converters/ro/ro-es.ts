import { Text } from "types";

export const roEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnEsXRules } = await import("data/latn/latn-es_x.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  const transliterator = RBT.fromRules(
    roLatnRules + latnIRules + latnEsRules + latnEsXRules + latnKQuRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

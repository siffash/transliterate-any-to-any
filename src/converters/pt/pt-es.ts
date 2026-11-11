import { Text } from "types";

export const ptEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");
  const { latnEsXRules } = await import("data/latn/latn-es_x.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  const transliterator = RBT.fromRules(
    ptLatnRules + latnShSRules + latnEsRules + latnEsXRules + latnKQuRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

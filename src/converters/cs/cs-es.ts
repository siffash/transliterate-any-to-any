import { Text } from "types";

export const csEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnThTRules + latnShSRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

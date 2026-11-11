import { Text } from "types";

export const bgEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnIyIRules } = await import("data/latn/latn_iy-i.rules");
  const { latnIaRules } = await import("data/latn/latn_ia.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnIyIRules + latnIaRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

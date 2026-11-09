import { Text } from "types";

export const itSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnSrRules } = await import("data/it/it-latn_sr.rules");
  const { itLatnYeRules } = await import("data/it/it-latn_ye.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  const transliterator = RBT.fromRules(itLatnRules + itLatnYeRules + itLatnSrRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

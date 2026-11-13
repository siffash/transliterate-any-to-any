import { Text } from "types";

export const skSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skLatnSrRules } = await import("data/sk/sk-latn_sr.rules");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  const transliterator = RBT.fromRules(
    skLatnSrRules + csSkLatnPalatalRules + skLatnRules + latnSrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

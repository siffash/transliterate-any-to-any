import { Text } from "types";

export const trSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { trAzKkLatnOuRules } = await import("data/latn/tr_az_kk-latn_ou.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  const transliterator = RBT.fromRules(trLatnRules + trAzKkLatnOuRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

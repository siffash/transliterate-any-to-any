import { Text } from "types";

export const ukKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnYeRules } = await import("data/latn/latn_ye.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { kaKsRules } = await import("data/ka/ka_ks.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnYeRules + latnKaRules + kaKsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

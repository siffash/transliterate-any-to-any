import { Text } from "types";

export const ruKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { ruLatnKaRules } = await import("data/ru/ru-latn_ka.rules");
  const { latnYeRules } = await import("data/latn/latn_ye.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { kaKsRules } = await import("data/ka/ka_ks.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + ruLatnKaRules + latnYeRules + latnKaRules + kaKsRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

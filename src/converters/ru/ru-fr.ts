import { Text } from "types";

export const ruFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { ruLatnIjRules } = await import("data/ru/ru-latn_ij.rules");
  const { latnFrIyRules } = await import("data/latn/latn-fr_iy.rules");
  const { latnFrIyaRules } = await import("data/latn/latn-fr_iya.rules");
  const { latnYIRules } = await import("data/latn/latn_y-i.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnFrTremaRules } = await import("data/latn/latn-fr_trema.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules +
      latnSeparatorRules +
      ruLatnIjRules +
      latnFrIyRules +
      latnFrIyaRules +
      latnYIRules +
      latnOuHiatusRules +
      latnFrRules +
      latnFrTremaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

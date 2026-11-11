import { Text } from "types";

export const ukFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnFrIyRules } = await import("data/latn/latn-fr_iy.rules");
  const { latnFrIyaRules } = await import("data/latn/latn-fr_iya.rules");
  const { latnYIRules } = await import("data/latn/latn_y-i.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnFrTremaRules } = await import("data/latn/latn-fr_trema.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules +
      latnSeparatorRules +
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

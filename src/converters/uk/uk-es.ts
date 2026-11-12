import { Text } from "types";

export const ukEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIyIRules } = await import("data/latn/latn_iy-i.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnIaRules } = await import("data/latn/latn_ia.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules +
      latnSeparatorRules +
      latnIyIRules +
      latnIRules +
      latnIaRules +
      latnDzjRules +
      latnDzRules +
      latnEsRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

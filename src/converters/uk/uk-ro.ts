import { Text } from "types";

export const ukRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIyIiRules } = await import("data/latn/latn_iy-ii.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnRoEaRules } = await import("data/latn/latn-ro_ea.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoDjRules } = await import("data/latn/latn-ro_dj.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules +
      latnSeparatorRules +
      latnIyIiRules +
      latnDzRules +
      latnRoEaRules +
      latnRoDjRules +
      latnRoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

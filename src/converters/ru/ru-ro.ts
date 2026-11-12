import { Text } from "types";

export const ruRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIyIiRules } = await import("data/latn/latn_iy-ii.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnRoERules } = await import("data/latn/latn-ro_e.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + latnSeparatorRules + latnIyIiRules + latnDzRules + latnRoERules + latnRoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

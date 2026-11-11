import { Text } from "types";

export const trRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoARules } = await import("data/latn/latn-ro_a.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnRoRules + latnRoARules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

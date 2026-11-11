import { Text } from "types";

export const viRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoARules } = await import("data/latn/latn-ro_a.rules");
  const { latnRoKRules } = await import("data/latn/latn-ro_k.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnRoRules + latnRoARules + latnRoKRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

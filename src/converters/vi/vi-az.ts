import { Text } from "types";

export const viAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnAyRules } = await import("data/latn/latn_ay.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnKwKuRules } = await import("data/latn/latn_kw-ku.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnKwKuRules + latnAyRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

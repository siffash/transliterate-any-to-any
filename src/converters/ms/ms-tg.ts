import { Text } from "types";

export const msTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnTgGlottalRules } = await import("data/latn/latn-tg_glottal.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  const transliterator = RBT.fromRules(msIdLatnRules + latnTgGlottalRules + latnTgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const etTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");

  const transliterator = RBT.fromRules(
    etLatnRules + latnDiphthongIyRules + latnThTRules + latnTgRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

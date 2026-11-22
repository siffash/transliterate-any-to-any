import { Text } from "types";

export const etBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");
  const { latnCyrlYaRules } = await import("data/latn/latn-cyrl_ya.rules");

  const transliterator = RBT.fromRules(
    etLatnRules + latnDiphthongIyRules + latnCyrlYaRules + latnBgRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

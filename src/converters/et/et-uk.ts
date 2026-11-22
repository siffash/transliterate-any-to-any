import { Text } from "types";

export const etUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");
  const { etLatnUkGRules } = await import("data/et/et-latn_uk-g.rules");
  const { latnUkJaRules } = await import("data/latn/latn-uk_ja.rules");
  const { latnCyrlYaRules } = await import("data/latn/latn-cyrl_ya.rules");
  const { latnLongIiRules } = await import("data/latn/latn_long-ii.rules");
  const { etLatnUkLjRules } = await import("data/et/et-latn_uk-lj.rules");

  const transliterator = RBT.fromRules(
    etLatnRules +
      etLatnUkLjRules +
      latnDiphthongIyRules +
      latnLongIiRules +
      etLatnUkGRules +
      latnUkJaRules +
      latnCyrlYaRules +
      latnUkRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

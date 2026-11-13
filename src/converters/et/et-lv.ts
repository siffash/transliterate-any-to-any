import { Text } from "types";

export const etLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");
  const { latnIERules } = await import("data/latn/latn_i-e.rules");
  const { fiEtLatnLvRules } = await import("data/latn/fi_et-latn_lv.rules");
  const { etLatnLvRules } = await import("data/et/et-latn_lv.rules");

  const transliterator = RBT.fromRules(
    fiEtLatnLvRules + etLatnRules + etLatnLvRules + latnIERules + latnLvUmlautRules + latnLvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

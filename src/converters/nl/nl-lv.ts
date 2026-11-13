import { Text } from "types";

export const nlLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { nlLatnLvRules } = await import("data/nl/nl-latn_lv.rules");

  const transliterator = RBT.fromRules(
    nlLatnLvRules + nlLatnRules + latnSilentHRules + latnLvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

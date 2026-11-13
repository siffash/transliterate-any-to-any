import { Text } from "types";

export const noLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { noLatnAuRules } = await import("data/no/no-latn_au.rules");
  const { noSvLatnLvRules } = await import("data/latn/no_sv-latn_lv.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");

  const transliterator = RBT.fromRules(
    noSvLatnLvRules +
      noLatnRules +
      noLatnAuRules +
      latnSilentHRules +
      latnLvUmlautRules +
      latnLvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

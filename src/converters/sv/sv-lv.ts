import { Text } from "types";

export const svLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { svLatnLvRules } = await import("data/sv/sv-latn_lv.rules");
  const { noSvLatnLvRules } = await import("data/latn/no_sv-latn_lv.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");
  const { svLatnBalticRules } = await import("data/sv/sv-latn_baltic.rules");
  const { svLatnBalticPreRules } = await import("data/sv/sv-latn_baltic-pre.rules");

  const transliterator = RBT.fromRules(
    noSvLatnLvRules +
      svLatnBalticPreRules +
      svLatnRules +
      svLatnBalticRules +
      svLatnLvRules +
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

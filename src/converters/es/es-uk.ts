import { Text } from "types";

export const esUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { esLatnYeRules } = await import("data/es/es-latn_ye.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");
  const { esLatnDiphthongIRules } = await import("data/es/es-latn_diphthong-i.rules");
  const { latnRomanceLyRules } = await import("data/latn/latn_romance-ly.rules");
  const { ukRomanceLyoRules } = await import("data/uk/uk_romance-lyo.rules");

  const transliterator = RBT.fromRules(
    esLatnDiphthongIRules +
      esLatnRules +
      esLatnYeRules +
      latnRomanceLyRules +
      ukRomanceLyoRules +
      latnUkRules +
      ukLRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

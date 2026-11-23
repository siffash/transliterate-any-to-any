import { Text } from "types";

export const esRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { esLatnYeRules } = await import("data/es/es-latn_ye.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");
  const { esLatnDiphthongIRules } = await import("data/es/es-latn_diphthong-i.rules");
  const { latnRomanceLyRules } = await import("data/latn/latn_romance-ly.rules");

  return convertText(
    text,
    esLatnDiphthongIRules +
      esLatnRules +
      esLatnYeRules +
      latnRomanceLyRules +
      latnRuRules +
      ruLRules,
  );
};

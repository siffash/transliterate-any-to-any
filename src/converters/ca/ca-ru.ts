import { Text } from "types";

export const caRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");
  const { caLatnDiphthongIRules } = await import("data/ca/ca-latn_diphthong-i.rules");
  const { caLatnRuSRules } = await import("data/ca/ca-latn_ru-s.rules");
  const { latnRomanceLyRules } = await import("data/latn/latn_romance-ly.rules");

  return convertText(
    text,
    caLatnDiphthongIRules +
      caLatnRuSRules +
      caLatnRules +
      latnRomanceLyRules +
      latnRuRules +
      ruLRules,
  );
};

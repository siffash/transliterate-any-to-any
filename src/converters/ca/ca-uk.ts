import { Text } from "types";

export const caUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");
  const { caLatnDiphthongIRules } = await import("data/ca/ca-latn_diphthong-i.rules");
  const { latnRomanceLyRules } = await import("data/latn/latn_romance-ly.rules");
  const { ukRomanceLyoRules } = await import("data/uk/uk_romance-lyo.rules");

  return convertText(
    text,
    caLatnDiphthongIRules +
      caLatnRules +
      latnRomanceLyRules +
      ukRomanceLyoRules +
      latnUkRules +
      ukLRules,
  );
};

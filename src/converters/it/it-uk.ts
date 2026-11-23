import { Text } from "types";

export const itUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnSantHyphenRules } = await import("data/it/it-latn_sant-hyphen.rules");
  const { itLatnGgRules } = await import("data/it/it-latn_gg.rules");
  const { itLatnYeRules } = await import("data/it/it-latn_ye.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");
  const { latnRomanceLyRules } = await import("data/latn/latn_romance-ly.rules");

  return convertText(
    text,
    itLatnRules +
      itLatnSantHyphenRules +
      itLatnYeRules +
      itLatnGgRules +
      latnRomanceLyRules +
      latnUkRules +
      ukLRules,
  );
};

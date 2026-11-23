import { Text } from "types";

export const koRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koLatnRules } = await import("data/ko/ko-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoARules } = await import("data/latn/latn-ro_a.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(
    text,
    koLatnAssimRules + koLatnRules + latnRoRules + latnRoARules + latnKoHyphenRules,
    { source: koLatn },
  );
};

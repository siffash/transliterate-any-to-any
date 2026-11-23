import { Text } from "types";

export const koAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koLatnRules } = await import("data/ko/ko-latn.rules");
  const { koLatnInitialRules } = await import("data/ko/ko-latn_initial.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnNRules } = await import("data/ko/ko-latn_n.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(
    text,
    koLatnAssimRules +
      koLatnRules +
      koLatnInitialRules +
      koLatnNRules +
      latnAzRules +
      latnKoHyphenRules,
    { source: koLatn },
  );
};

import { Text } from "types";

export const koMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koLatnRules } = await import("data/ko/ko-latn.rules");
  const { koLatnUiRules } = await import("data/ko/ko-latn_ui.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(
    text,
    koLatnAssimRules + koLatnRules + koLatnUiRules + latnMtRules + latnKoHyphenRules,
    {
      source: koLatn,
    },
  );
};

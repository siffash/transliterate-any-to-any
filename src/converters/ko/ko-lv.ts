import { Text } from "types";

export const koLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koLatnRules } = await import("data/ko/ko-latn.rules");
  const { koLatnInitialRules } = await import("data/ko/ko-latn_initial.rules");
  const { koLatnInitialChRules } = await import("data/ko/ko-latn_initial-ch.rules");
  const { koLatnNRules } = await import("data/ko/ko-latn_n.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnKoJoinRules } = await import("data/latn/latn_ko-join.rules");
  const { koLatn } = await import("converters/ko/ko-latn");

  return convertText(
    text,
    koLatnAssimRules +
      koLatnRules +
      koLatnInitialRules +
      koLatnInitialChRules +
      koLatnNRules +
      latnLvRules +
      latnKoJoinRules,
    { source: koLatn },
  );
};

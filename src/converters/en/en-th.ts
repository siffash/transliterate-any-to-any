import { Text } from "types";

export const enTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLSchwaRestoreRules,
    ngConsonantRestoreRules,
    airRestoreRules,
    mouthRestoreRules,
    mouthReducedRestoreRules,
    boroughRestoreRules,
    boroughReducedRestoreRules,
    woodRestoreRules,
    juzRestoreRules,
    yesRestoreRules,
    yesVoicelessRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaThRules } = await import("data/en/en-ipa_th.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { enIpaShireRules } = await import("data/en/en-ipa_shire.rules");

  return convertText(
    text,
    enIpaShireRules + enIpaThRules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
    {
      source: words =>
        enIpa(
          words,
          [
            ...syllabicLSchwaRestoreRules,
            ...ngConsonantRestoreRules,
            ...airRestoreRules,
            ...mouthReducedRestoreRules,
            ...boroughReducedRestoreRules,
            ...yesVoicelessRestoreRules,
          ],
          [
            ...mouthRestoreRules,
            ...boroughRestoreRules,
            ...woodRestoreRules,
            ...juzRestoreRules,
            ...yesRestoreRules,
          ],
        ),
    },
  );
};

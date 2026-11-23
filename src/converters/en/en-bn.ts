import { Text } from "types";

export const enBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLeSchwaRestoreRules,
    geminateRestoreRules,
    geminateSingleRestoreRules,
    ngConsonantRestoreRules,
    airRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaOuRules } = await import("data/en/en-ipa_ou.rules");
  const { enIpaBnRules } = await import("data/en/en-ipa_bn.rules");
  const { enIpaRetroflexRules } = await import("data/en/en-ipa_retroflex.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, enIpaBnRules + enIpaRetroflexRules + enIpaOuRules + ipaBnRules, {
    source: words =>
      enIpa(
        words,
        [
          ...syllabicLeSchwaRestoreRules,
          ...geminateSingleRestoreRules,
          ...ngConsonantRestoreRules,
          ...airRestoreRules,
        ],
        geminateRestoreRules,
      ),
  });
};

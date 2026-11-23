import { Text } from "types";

export const enBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { enIpaBgRules } = await import("data/en/en-ipa_bg.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");
  const { enIpaShireRules } = await import("data/en/en-ipa_shire.rules");
  const { enIpaOcvRules } = await import("data/en/en-ipa_ocv.rules");
  const {
    bgRestoreRules,
    erRestoreRules,
    mouthRestoreRules,
    boroughRestoreRules,
    ietyRestoreRules,
  } = await import("helpers/normalizeEnIpa");

  return convertText(text, enIpaShireRules + enIpaBgRules + ipaBgRules, {
    source: words =>
      enIpa(
        words,
        bgRestoreRules,
        [...erRestoreRules, ...mouthRestoreRules, ...boroughRestoreRules, ...ietyRestoreRules],
        enIpaOcvRules,
      ),
    caseLang: "bg",
    elision: "'",
  });
};

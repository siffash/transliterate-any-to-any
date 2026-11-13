import { Text } from "types";

export const enTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
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
  } = await import("helpers/normalizeEnIpa");
  const { enIpaThRules } = await import("data/en/en-ipa_th.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  const transliterator = RBT.fromRules(
    enIpaThRules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(
    words,
    [
      ...syllabicLSchwaRestoreRules,
      ...ngConsonantRestoreRules,
      ...airRestoreRules,
      ...mouthReducedRestoreRules,
      ...boroughReducedRestoreRules,
    ],
    [...mouthRestoreRules, ...boroughRestoreRules, ...woodRestoreRules],
  );
  const result = ipa.map(ipa => transliterator.transliterate(ipa));
  return typeof text === "string" ? result[0] : result;
};

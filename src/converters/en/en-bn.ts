import { Text } from "types";

export const enBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
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

  const transliterator = RBT.fromRules(
    enIpaBnRules + enIpaRetroflexRules + enIpaOuRules + ipaBnRules,
  );

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(
    words,
    [
      ...syllabicLeSchwaRestoreRules,
      ...geminateSingleRestoreRules,
      ...ngConsonantRestoreRules,
      ...airRestoreRules,
    ],
    geminateRestoreRules,
  );
  const result = ipa.map(ipa => transliterator.transliterate(ipa));
  return typeof text === "string" ? result[0] : result;
};

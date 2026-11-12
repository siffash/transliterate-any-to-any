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

  if (typeof text === "string") {
    const ipa = await enIpa<string>(
      text,
      [
        ...syllabicLeSchwaRestoreRules,
        ...geminateSingleRestoreRules,
        ...ngConsonantRestoreRules,
        ...airRestoreRules,
      ],
      geminateRestoreRules,
    );
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(
      text,
      [
        ...syllabicLeSchwaRestoreRules,
        ...geminateSingleRestoreRules,
        ...ngConsonantRestoreRules,
        ...airRestoreRules,
      ],
      geminateRestoreRules,
    );
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

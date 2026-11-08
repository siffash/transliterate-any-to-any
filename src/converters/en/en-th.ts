import { Text } from "types";

export const enTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLSchwaRestoreRules, ngConsonantRestoreRules } =
    await import("helpers/normalizeEnIpa");
  const { enIpaThRules } = await import("data/en/en-ipa_th.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  const transliterator = RBT.fromRules(
    enIpaThRules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, [
      ...syllabicLSchwaRestoreRules,
      ...ngConsonantRestoreRules,
    ]);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, [
      ...syllabicLSchwaRestoreRules,
      ...ngConsonantRestoreRules,
    ]);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

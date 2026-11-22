import { Text } from "types";

export const arAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  const transliterator = RBT.fromRules(
    arIpaArticleRules +
      latnQHoldRules +
      ipaAzRules +
      ipaDottedIRules +
      "::Title;" +
      arLowerRules +
      latnQRestoreRules,
  );

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

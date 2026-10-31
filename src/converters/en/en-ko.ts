import { Text } from "types";

export const enKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ettRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaOuRules } = await import("data/en/en-ipa_ou.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(enIpaOuRules + ipaKoRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, [], ettRestoreRules);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, [], ettRestoreRules);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

import { Text } from "types";

export const faPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaHyRules } = await import("data/fa/fa-ipa_hy.rules");
  const { faIpaGhRules } = await import("data/fa/fa-ipa_gh.rules");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaPlArabRules } = await import("data/ipa/ipa-pl_arab.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");

  const transliterator = RBT.fromRules(
    faIpaHyRules +
      faIpaGhRules +
      faIpaARules +
      ipaPlArabRules +
      ipaPlRules +
      "::Title;" +
      faLowerRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpaUvular<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpaUvular<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

import { Text } from "types";

export const faHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemHuRules } = await import("data/ipa/ipa_gemhu.rules");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaKRules } = await import("data/fa/fa-ipa_k.rules");
  const { faIpaGhRules } = await import("data/fa/fa-ipa_gh.rules");
  const { faIpaShortIuRules } = await import("data/fa/fa-ipa_short-iu.rules");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  const transliterator = RBT.fromRules(
    faIpaKRules +
      faIpaGhRules +
      faIpaShortIuRules +
      ipaGemHuRules +
      faIpaARules +
      ipaHuRules +
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

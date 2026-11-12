import { Text } from "types";

export const faEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaGhRules } = await import("data/fa/fa-ipa_gh.rules");
  const { faIpaUvularQRules } = await import("data/fa/fa-ipa_uvular-q.rules");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaEhRules } = await import("data/fa/fa-ipa_eh.rules");
  const { faIpaEnRules } = await import("data/fa/fa-ipa_en.rules");
  const { ipaEnRules } = await import("data/ipa/ipa-en.rules");

  const transliterator = RBT.fromRules(
    faIpaUvularQRules +
      faIpaGhRules +
      faIpaARules +
      faIpaEhRules +
      faIpaEnRules +
      ipaEnRules +
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

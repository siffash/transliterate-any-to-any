import { Text } from "types";

export const faEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaEhRules } = await import("data/fa/fa-ipa_eh.rules");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  const transliterator = RBT.fromRules(
    ipaGemTRules + faIpaARules + faIpaEhRules + ipaEtRules + "::Title;" + faLowerRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

import { Text } from "types";

export const faMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaEhRules } = await import("data/fa/fa-ipa_eh.rules");
  const { ipaMtGlottalRules } = await import("data/ipa/ipa-mt_glottal.rules");
  const { ipaMtRules } = await import("data/ipa/ipa-mt.rules");

  const transliterator = RBT.fromRules(
    faIpaARules + faIpaEhRules + ipaMtGlottalRules + ipaMtRules + "::Title;" + faLowerRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

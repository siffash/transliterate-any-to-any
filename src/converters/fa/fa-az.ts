import { Text } from "types";

export const faAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaAzRules } = await import("data/fa/fa-ipa_az.rules");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");

  const transliterator = RBT.fromRules(
    faIpaAzRules + ipaAzRules + ipaDottedIRules + "::Title;" + faLowerRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

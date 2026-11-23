import { Text } from "types";

export const faEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");

  return convertText(text, ipaGemRules + faIpaARules + ipaElRules + "::Title;" + faLowerRules, {
    source: faIpa,
  });
};

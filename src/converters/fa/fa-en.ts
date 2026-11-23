import { Text } from "types";

export const faEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaGhRules } = await import("data/fa/fa-ipa_gh.rules");
  const { ipaUvularQRules } = await import("data/ipa/ipa_uvular-q.rules");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaEhRules } = await import("data/fa/fa-ipa_eh.rules");
  const { faIpaEnRules } = await import("data/fa/fa-ipa_en.rules");
  const { ipaEnRules } = await import("data/ipa/ipa-en.rules");

  return convertText(
    text,
    ipaUvularQRules +
      faIpaGhRules +
      faIpaARules +
      faIpaEhRules +
      faIpaEnRules +
      ipaEnRules +
      "::Title;" +
      faLowerRules,
    { source: faIpaUvular },
  );
};

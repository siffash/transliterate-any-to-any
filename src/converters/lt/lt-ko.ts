import { Text } from "types";

export const ltKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltIpaKoIaRules } = await import("data/lt/lt-ipa_ko-ia.rules");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ltIpaKoRules } = await import("data/lt/lt-ipa_ko.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    ltIpaKoIaRules + ltIpaRules + ltIpaKoRules + ipaKoFinalKpRules + ipaKoRules,
  );
};

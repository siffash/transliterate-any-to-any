import { Text } from "types";

export const csFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { csSkIpaRzhRRules } = await import("data/ipa/cs_sk-ipa_rzh-r.rules");
  const { csIpaFaRules } = await import("data/cs/cs-ipa_fa.rules");
  const { csIpaHardERules } = await import("data/cs/cs-ipa_hard-e.rules");
  const { csIpaHardIRules } = await import("data/cs/cs-ipa_hard-i.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { csIpaFaChRules } = await import("data/cs/cs-ipa_fa-ch.rules");

  return convertText(
    text,
    csIpaFaRules +
      csIpaHardERules +
      csIpaHardIRules +
      csIpaRules +
      csSkIpaRzhRRules +
      csIpaFaChRules +
      ipaFaRules,
  );
};

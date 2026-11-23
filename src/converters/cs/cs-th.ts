import { Text } from "types";

export const csTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { csSkIpaRzhThRules } = await import("data/ipa/cs_sk-ipa_rzh-th.rules");
  const { csIpaHardERules } = await import("data/cs/cs-ipa_hard-e.rules");
  const { csIpaHardIRules } = await import("data/cs/cs-ipa_hard-i.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    csIpaHardERules +
      csIpaHardIRules +
      csIpaRules +
      csSkIpaRzhThRules +
      ipaThOpenRules +
      ipaThRules +
      ipaThKaranRules,
  );
};

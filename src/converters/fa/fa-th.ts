import { Text } from "types";

export const faTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaThRules } = await import("data/fa/fa-ipa_th.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(text, faIpaThRules + ipaThOpenRules + ipaThRules + ipaThKaranRules, {
    source: faIpa,
  });
};

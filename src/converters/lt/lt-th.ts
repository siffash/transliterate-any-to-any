import { Text } from "types";

export const ltTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ltIpaThRules } = await import("data/lt/lt-ipa_th.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    ltIpaRules + ltIpaThRules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );
};

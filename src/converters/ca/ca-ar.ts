import { Text } from "types";

export const caAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaArLlRules } = await import("data/ipa/ipa-ar_ll.rules");

  return convertText(text, caIpaRules + ipaArLlRules + ipaArRules);
};

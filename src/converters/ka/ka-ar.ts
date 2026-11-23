import { Text } from "types";

export const kaAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaQKRules } = await import("data/ipa/ipa_q-k.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, kaIpaRules + ipaQKRules + ipaArRules);
};

import { Text } from "types";

export const mtUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { mtIpaQRules } = await import("data/mt/mt-ipa_q.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, mtIpaRules + mtIpaQRules + ipaUrRules);
};

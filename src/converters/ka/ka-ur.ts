import { Text } from "types";

export const kaUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaAspirationDropRules } = await import("data/ipa/ipa_aspiration-drop.rules");
  const { ipaEjectiveDropRules } = await import("data/ipa/ipa_ejective-drop.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, kaIpaRules + ipaAspirationDropRules + ipaEjectiveDropRules + ipaUrRules);
};

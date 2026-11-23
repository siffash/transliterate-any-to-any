import { Text } from "types";

export const deAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaArERules } = await import("data/ipa/ipa-ar_e.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaArEDropRules } = await import("data/ipa/ipa-ar_e-drop.rules");

  return convertText(text, deIpaRules + ipaArEDropRules + ipaErRules + ipaArERules + ipaArRules);
};

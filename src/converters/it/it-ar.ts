import { Text } from "types";

export const itAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { itIpaArRules } = await import("data/it/it-ipa_ar.rules");

  return convertText(text, itIpaRules + itIpaArRules + ipaArRules);
};

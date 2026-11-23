import { Text } from "types";

export const bgAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { latnXHRules } = await import("data/latn/latn_x-h.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, bgIpaRules + latnXHRules + ipaArRules);
};

import { Text } from "types";

export const bsUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, bsIpaRules + ipaUrRules);
};

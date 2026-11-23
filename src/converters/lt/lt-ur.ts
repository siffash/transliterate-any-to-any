import { Text } from "types";

export const ltUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, ltIpaRules + ipaUrRules);
};

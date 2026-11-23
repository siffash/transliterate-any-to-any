import { Text } from "types";

export const etUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, etIpaRules + ipaUrRules);
};

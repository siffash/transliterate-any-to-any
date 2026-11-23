import { Text } from "types";

export const itUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, itIpaRules + ipaUrRules);
};

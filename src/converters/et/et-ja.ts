import { Text } from "types";

export const etJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etIpaQ2Rules } = await import("data/et/et-ipa_q2.rules");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, etIpaRules + etIpaQ2Rules + ipaJaRules);
};

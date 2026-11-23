import { Text } from "types";

export const esBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaZRules } = await import("data/es/es-ipa_z.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, esIpaZRules + esIpaRules + ipaBnRules);
};

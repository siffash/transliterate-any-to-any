import { Text } from "types";

export const bsBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, bsIpaRules + ipaBnRules);
};

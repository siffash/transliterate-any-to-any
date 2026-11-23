import { Text } from "types";

export const csBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { csIpaLabialERules } = await import("data/cs/cs-ipa_labial-e.rules");
  const { csIpaHardERules } = await import("data/cs/cs-ipa_hard-e.rules");
  const { csIpaHardIRules } = await import("data/cs/cs-ipa_hard-i.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(
    text,
    csIpaLabialERules + csIpaHardERules + csIpaHardIRules + csIpaRules + ipaBnRules,
  );
};

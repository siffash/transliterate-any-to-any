import { Text } from "types";

export const bnTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaRaiseRules } = await import("data/bn/bn-ipa_raise.rules");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");

  return convertText(
    text,
    bnIpaRules + bnIpaRaiseRules + ipaTrRules + ipaDottedIRules + "::Title;",
  );
};

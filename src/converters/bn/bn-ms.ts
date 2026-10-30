import { Text } from "types";

export const bnMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaGemRules + ipaMsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

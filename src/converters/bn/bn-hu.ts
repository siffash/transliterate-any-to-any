import { Text } from "types";

export const bnHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemHuRules } = await import("data/ipa/ipa_gemhu.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { bnIpaARules } = await import("data/bn/bn-ipa_a.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  const transliterator = RBT.fromRules(
    bnIpaRules + bnIpaARules + ipaGemHuRules + ipaHuRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

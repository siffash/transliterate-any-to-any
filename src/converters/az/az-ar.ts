import { Text } from "types";

export const azAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { azLatnQRules } = await import("data/az/az-latn_q.rules");
  const { ipaUvularQRules } = await import("data/ipa/ipa_uvular-q.rules");
  const { ipaUnroundedIRules } = await import("data/ipa/ipa_unrounded-i.rules");

  const transliterator = RBT.fromRules(
    azLatnQRules + azIpaRules + ipaUnroundedIRules + ipaUvularQRules + ipaArRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

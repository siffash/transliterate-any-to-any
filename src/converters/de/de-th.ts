import { Text } from "types";

export const deTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaIgRules } = await import("data/de/de-ipa_ig.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { deIpaThRules } = await import("data/de/de-ipa_th.rules");
  const { deThBurgRules } = await import("data/de/de-th_burg.rules");

  const transliterator = RBT.fromRules(
    deIpaRules +
      deIpaIgRules +
      ipaErRules +
      ipaThOpenRules +
      deIpaThRules +
      ipaThRules +
      ipaThKaranRules +
      deThBurgRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

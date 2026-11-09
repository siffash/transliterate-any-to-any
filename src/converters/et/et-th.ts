import { Text } from "types";

export const etTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etIpaQ2Rules } = await import("data/et/et-ipa_q2.rules");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  const transliterator = RBT.fromRules(
    etIpaRules + etIpaQ2Rules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};

import { Text } from "types";

export const frHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frHeIpaRRules } = await import("data/ipa/fr_he-ipa_r.rules");
  const { frIpaHyRules } = await import("data/fr/fr-ipa_hy.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(
    frIpaNgRules + frHeIpaRRules + frIpaHyRules + ipaHyRules + hyEvRules,
  );

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, { finalIeu: true });
    return copyCase(text, keepElision(ipa, transliterator, "'"), "hy");
  } else {
    const ipaArray = await frIpa<string[]>(text, { finalIeu: true });
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator, "'"), "hy"));
  }
};

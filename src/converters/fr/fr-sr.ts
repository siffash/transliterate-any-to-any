import { Text } from "types";

export const frSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");
  const { latnHyphenSpaceRules } = await import("data/latn/latn_hyphen-space.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(frIpaNgRules + ipaSrRules + latnHyphenSpaceRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, { oiO: true });
    return copyCase(text, keepElision(ipa, transliterator), "sr");
  } else {
    const ipaArray = await frIpa<string[]>(text, { oiO: true });
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "sr"));
  }
};

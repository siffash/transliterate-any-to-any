import { Text } from "types";

export const frPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(frIpaNgRules + ipaPlRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return copyCase(text, keepElision(ipa, transliterator), "pl");
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "pl"));
  }
};

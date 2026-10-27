import { Text } from "types";

export const frPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaPtRules } = await import("data/ipa/ipa-pt.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(frIpaNgRules + ipaPtRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return copyCase(text, keepElision(ipa, transliterator), "pt");
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "pt"));
  }
};

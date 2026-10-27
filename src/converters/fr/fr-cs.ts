import { Text } from "types";

export const frCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(frIpaNgRules + ipaCsRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return copyCase(text, keepElision(ipa, transliterator), "cs");
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "cs"));
  }
};

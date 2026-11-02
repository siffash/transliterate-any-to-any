import { Text } from "types";

export const frNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNlRules } = await import("data/fr/fr-ipa_nl.rules");
  const { ipaNlRules } = await import("data/ipa/ipa-nl.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(frIpaNlRules + ipaNlRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return copyCase(text, keepElision(ipa, transliterator), "nl");
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "nl"));
  }
};

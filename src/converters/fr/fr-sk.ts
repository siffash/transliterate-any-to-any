import { Text } from "types";

export const frSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(frIpaNgRules + ipaSkRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return copyCase(text, keepElision(ipa, transliterator), "sk");
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "sk"));
  }
};

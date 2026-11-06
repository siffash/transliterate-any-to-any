import { Text } from "types";

let frenchMapIpa: Promise<Record<string, string>> | undefined;

// The lb map words are French, so they get the same Thai reading as fr → th
const getFrenchMapIpa = async () => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpaMap } = await import("data/lb/lb-ipa.map");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaThRules } = await import("data/fr/fr-ipa_th.rules");

  const transliterator = RBT.fromRules(frIpaThRules);
  const words = Object.keys(lbIpaMap);
  const ipaArray = await frIpa<string[]>(words, false, false, false, true, true);
  return Object.fromEntries(
    words.map((word, i) => [word, transliterator.transliterate(ipaArray[i])]),
  );
};

export const lbTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(ipaThRules);
  // A failed build isn't cached, so the next call retries it
  frenchMapIpa ??= getFrenchMapIpa().catch(error => {
    frenchMapIpa = undefined;
    throw error;
  });
  const mapIpa = await frenchMapIpa;

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text, false, mapIpa, ipaErRules + ipaThOpenRules);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text, false, mapIpa, ipaErRules + ipaThOpenRules);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

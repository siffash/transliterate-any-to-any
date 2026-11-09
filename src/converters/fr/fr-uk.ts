import { Text } from "types";

export const frUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frIpaCyrlRules } = await import("data/fr/fr-ipa_cyrl.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");
  const { frCyrlRlRules } = await import("data/fr/fr-cyrl_rl.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(
    frIpaNgRules + frIpaCyrlRules + ipaUkRules + ukLRules + frCyrlRlRules,
  );

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, { spelledEy: true, doubleConsonants: "final" });
    return copyCase(text, keepElision(ipa, transliterator), "uk");
  } else {
    const ipaArray = await frIpa<string[]>(text, { spelledEy: true, doubleConsonants: "final" });
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "uk"));
  }
};

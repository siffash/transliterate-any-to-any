import { Text } from "types";

export const urBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaBnRules } = await import("data/ur/ur-ipa_bn.rules");
  const { ipaBnYRules } = await import("data/ipa/ipa-bn_y.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");
  const { ipaViramaDropRules } = await import("data/ipa/ipa_virama-drop.rules");

  const transliterator = RBT.fromRules(
    urIpaBnRules + ipaBnYRules + ipaBnRules + ipaViramaDropRules,
  );

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text, true);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text, true);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

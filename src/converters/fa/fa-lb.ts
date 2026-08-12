import { Text } from "types";

export const faLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { ipaLbRules } = await import("data/ipa-lb.rules");

  const transliterator = RBT.fromRules(ipaLbRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

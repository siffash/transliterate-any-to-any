import { Text } from "types";

export const faTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faTgRules } = await import("data/fa/fa-tg.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  const transliterator = RBT.fromRules(faTgRules + ipaTgRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpaUvular<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpaUvular<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

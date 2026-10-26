import { Text } from "types";

export const enBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { enIpaBgRules } = await import("data/en/en-ipa_bg.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaBgRules + ipaBgRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa), "bg");
  } else {
    const ipaArray = await enIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "bg"));
  }
};

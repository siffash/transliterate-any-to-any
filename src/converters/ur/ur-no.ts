import { Text } from "types";

export const urNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { urIpaNoRules } = await import("data/ur/ur-ipa_no.rules");
  const { ipaNoRules } = await import("data/ipa/ipa-no.rules");

  const transliterator = RBT.fromRules(
    ipaGemTRules + ipaAspHRules + urIpaNoRules + ipaNoRules + "::Title;",
  );

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};

import { Text } from "types";

export const zhAr = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt");
  const { zhIpaArabRules } = await import("data/zh/zh-ipa_arab.rules");
  const { zhIpaRRules } = await import("data/zh/zh-ipa_r.rules");
  const { zhIpaVoicedRules } = await import("data/zh/zh-ipa_voiced.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(
    zhIpaArabRules + zhIpaVoicedRules + zhIpaRRules + ipaArRules,
  );

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "zh", text =>
      filterIpa(toIPA(text, { separator: "" }), text, "zh"),
    );
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

import { Text } from "types";

export const zhUr = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt");
  const { zhIpaArabRules } = await import("data/zh/zh-ipa_arab.rules");
  const { zhIpaRRules } = await import("data/zh/zh-ipa_r.rules");
  const { zhIpaVoicedRules } = await import("data/zh/zh-ipa_voiced.rules");
  const { zhIpaFaRules } = await import("data/zh/zh-ipa_fa.rules");
  const { ipaAspirationDropRules } = await import("data/ipa/ipa_aspiration-drop.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { urAiRules } = await import("data/ur/ur_ai.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(
    zhIpaArabRules +
      zhIpaVoicedRules +
      zhIpaRRules +
      zhIpaFaRules +
      ipaAspirationDropRules +
      ipaUrRules +
      urAiRules,
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

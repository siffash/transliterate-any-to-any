import { Text } from "types";

export const koFa = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { normalizeKoIpa } = await import("helpers/normalizeKoIpa");
  const { RBT } = await import("helpers/rbt");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { koIpaLiRules } = await import("data/ko/ko-ipa_li.rules");
  const { koIpaVoicedRules } = await import("data/ko/ko-ipa_voiced.rules");
  const { koIpaParkRules } = await import("data/ko/ko-ipa_park.rules");
  const { koIpaUnitRules } = await import("data/ko/ko-ipa_unit.rules");
  const { koIpaShiRules } = await import("data/ko/ko-ipa_shi.rules");
  const { koIpaEoRules } = await import("data/ko/ko-ipa_eo.rules");
  const { koIpaFaRules } = await import("data/ko/ko-ipa_fa.rules");

  const transliterator = RBT.fromRules(koIpaUnitRules + koIpaEoRules + koIpaFaRules + ipaFaRules);
  const voiced = RBT.fromRules(koIpaLiRules + koIpaParkRules + koIpaShiRules + koIpaVoicedRules);

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "ko", text =>
      normalizeKo(
        text,
        text =>
          voiced.transliterate(
            filterIpa(normalizeKoIpa(toIPA(text, { anyAscii: true })), text, "ko"),
          ),
        "ipa",
        { name: "~", syllable: "~", unit: "^" },
      ),
    );
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

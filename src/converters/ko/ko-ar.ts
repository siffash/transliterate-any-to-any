import { Text } from "types";

export const koAr = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { normalizeKoIpa } = await import("helpers/normalizeKoIpa");
  const { RBT } = await import("helpers/rbt");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { koIpaLiRules } = await import("data/ko/ko-ipa_li.rules");
  const { koIpaVoicedRules } = await import("data/ko/ko-ipa_voiced.rules");
  const { koIpaParkRules } = await import("data/ko/ko-ipa_park.rules");
  const { koIpaEoRules } = await import("data/ko/ko-ipa_eo.rules");
  const { koIpaArRules } = await import("data/ko/ko-ipa_ar.rules");

  const transliterator = RBT.fromRules(koIpaEoRules + koIpaArRules + ipaArRules);
  const voiced = RBT.fromRules(koIpaLiRules + koIpaParkRules + koIpaVoicedRules);

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "ko", text =>
      normalizeKo(
        text,
        text =>
          voiced.transliterate(
            filterIpa(normalizeKoIpa(toIPA(text, { anyAscii: true })), text, "ko"),
          ),
        "ipa",
        { name: "~", syllable: "~" },
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

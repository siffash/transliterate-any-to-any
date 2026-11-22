import { Text } from "types";

export const koHe = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { normalizeKoIpa } = await import("helpers/normalizeKoIpa");
  const { RBT } = await import("helpers/rbt");
  const { ipaHeARules } = await import("data/ipa/ipa-he_a.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { koIpaEoRules } = await import("data/ko/ko-ipa_eo.rules");
  const { koIpaLiRules } = await import("data/ko/ko-ipa_li.rules");

  const transliterator = RBT.fromRules(koIpaEoRules + ipaHeARules + ipaHeRules);
  const li = RBT.fromRules(koIpaLiRules);

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "ko", text =>
      normalizeKo(
        text,
        text =>
          li.transliterate(filterIpa(normalizeKoIpa(toIPA(text, { anyAscii: true })), text, "ko")),
        "ipa",
        { name: "~", syllable: "-" },
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

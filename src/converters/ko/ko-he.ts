import { Text } from "types";

export const koHe = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { normalizeKoIpa } = await import("helpers/normalizeKoIpa");
  const { RBT } = await import("helpers/rbt");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");

  const transliterator = RBT.fromRules(ipaHeRules);

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "ko", text =>
      normalizeKo(
        text,
        text => filterIpa(normalizeKoIpa(toIPA(text, { anyAscii: true })), text, "ko"),
        "ipa",
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

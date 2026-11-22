import { Text } from "types";

export const thJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { thIpa } = await import("converters/th/th-ipa");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { thIpaTsRules } = await import("data/th/th-ipa_ts.rules");
  const { thIpaJaRules } = await import("data/th/th-ipa_ja.rules");
  const { ipaJaNgRules } = await import("data/ipa/ipa-ja_ng.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");

  const toIpa = await thIpa();
  const transliterator = RBT.fromRules(thIpaJaRules + thIpaTsRules + ipaJaNgRules + ipaJaRules);

  const convert = async (text: string) => {
    const result = await wordSplitter(normalizeTh(text), "th", text =>
      transliterator.transliterate(toIpa(text)),
    );
    return result.replace(/(?<=[\p{L}\p{M}])-(?=\p{L})/gu, "");
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

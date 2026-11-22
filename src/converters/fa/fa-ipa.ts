import { Text } from "types";

export const faIpaUvular = async <T = Text>(text: Text): Promise<T> => {
  const { faIpaMap } = await import("data/fa/fa-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { faIpaRules } = await import("data/fa/fa-ipa.rules");
  const { faNormRules } = await import("data/fa/fa_norm.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");
  const { breakClusters } = await import("helpers/breakClusters");
  const { splitFaCompoundNames } = await import("helpers/splitFaCompoundNames");

  const transliterator = RBT.fromRules(faIpaRules);
  const normalizer = RBT.fromRules(faNormRules);

  const lookup = (word: string) =>
    faIpaMap[word] ??
    faIpaMap[word.replace(/^إ/, "ا")] ??
    faIpaMap[word.replaceAll("\u200c", "")] ??
    faIpaMap[word.replace(/[\u064B-\u0652\u0670]/g, "")];

  const isConsonant = (segment: string) => /\p{L}/u.test(segment) && !/[ɒæeoiu]/.test(segment);
  const fallback = (word: string) =>
    breakClusters(transliterator.transliterate(word).match(/d͡ʒ|t͡ʃ|./gu) ?? [], isConsonant, "æ");

  const compound = (word: string) => {
    const chars = [...word];
    for (let i = chars.length - 3; i >= 3; i--) {
      const first = chars.slice(0, i).join("");
      const second = chars.slice(i).join("");
      const firstIpa = filterIpa(lookup(first), first, "fa");
      const secondIpa = firstIpa && filterIpa(lookup(second), second, "fa");
      if (firstIpa && secondIpa) {
        return firstIpa + secondIpa.replace(/^ʔ/, "").replace(/^æll[ɒæ]ː?h/, "ollɒh");
      }
    }
    return undefined;
  };

  const toIpa = (word: string) =>
    filterIpa(lookup(word), word, "fa") || compound(word) || fallback(word);

  const withSuffix = (word: string) => {
    if (lookup(word) || !/\u0647\u200c?\u0627\u06cc$/.test(word)) return undefined;
    if (!word.includes("\u200c") && lookup(word.slice(0, -3))) return undefined;
    const stem = word.replace(/\u200c?\u0627\u06cc$/, "");
    const ipa = word.includes("\u200c") ? toIpa(stem) : filterIpa(lookup(stem), stem, "fa");
    return ipa?.endsWith("e") ? ipa + "\u0294i" : undefined;
  };

  const convert = async (text: string) =>
    await wordSplitter(
      splitFaCompoundNames(normalizer.transliterate(text)),
      "fa",
      (word: string) =>
        withSuffix(word) ??
        (word.includes("\u200c") && !lookup(word)
          ? word
              .split("\u200c")
              .map((part, i) =>
                i
                  ? toIpa(part)
                      .replace(/^ʔ/, "")
                      .replace(/^æll[ɒæ]ː?h/, "ollɒh")
                  : toIpa(part),
              )
              .join("")
          : toIpa(word)),
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};

export const faIpa = async <T = Text>(text: Text): Promise<T> => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaQRules } = await import("data/fa/fa-ipa_q.rules");

  const transliterator = RBT.fromRules(faIpaQRules);

  if (typeof text === "string") {
    return transliterator.transliterate(await faIpaUvular<string>(text)) as T;
  } else {
    const ipaArray = await faIpaUvular<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa)) as T;
  }
};

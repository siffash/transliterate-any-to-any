import { Text } from "types";

export const faIpaUvular = async <T = Text>(text: Text): Promise<T> => {
  const { faIpaMap } = await import("data/fa/fa-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { faIpaRules } = await import("data/fa/fa-ipa.rules");
  const { faNormRules } = await import("data/fa/fa_norm.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");
  const { breakClusters } = await import("helpers/breakClusters");

  const transliterator = RBT.fromRules(faIpaRules);
  const normalizer = RBT.fromRules(faNormRules);

  // Arabic spells an initial i- with a hamza below (إبراهيم), the map with a plain alef (ابراهیم);
  // most map keys come from Wikidata labels, which drop the ZWNJ of compounds (خرم‌آباد → خرمآباد)
  const lookup = (word: string) =>
    faIpaMap[word] ?? faIpaMap[word.replace(/^إ/, "ا")] ?? faIpaMap[word.replaceAll("\u200c", "")];

  // A word missing from the map gets its unwritten vowels back, most often æ (اسلامی → ʔæslɒmi, هشتپر → hæʃtæpɾ)
  const isConsonant = (segment: string) => /\p{L}/u.test(segment) && !/[ɒæeoiu]/.test(segment);
  const fallback = (word: string) =>
    breakClusters(transliterator.transliterate(word).match(/d͡ʒ|t͡ʃ|./gu) ?? [], isConsonant, "æ");

  const toIpa = (word: string) => filterIpa(lookup(word), word, "fa") || fallback(word);

  const convert = async (text: string) =>
    await wordSplitter(normalizer.transliterate(text), "fa", (word: string) =>
      word.includes("\u200c") && !lookup(word)
        ? word
            .split("\u200c")
            // a compound's second part الله is -ollah (حجت‌الله → hod͡ʒd͡ʒætollɒh)
            .map((part, i) =>
              i
                ? toIpa(part)
                    .replace(/^ʔ/, "")
                    .replace(/^æll[ɒæ]ː?h/, "ollɒh")
                : toIpa(part),
            )
            .join("")
        : toIpa(word),
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

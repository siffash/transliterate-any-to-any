import { Text } from "types";

export const faIpaUvular = async <T = Text>(text: Text, joiner = ""): Promise<T> => {
  const { mapText } = await import("helpers/convertText");
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

  const known = (word: string) => filterIpa(lookup(word), word, "fa");

  const tail = (ipa: string) => ipa.replace(/^ʔ/, "").replace(/^æll[ɒæ]ː?h/, "ollɒh");

  const compound = (word: string) => {
    const article = word.match(/^\u0639\u0628\u062f\u0627\u0644(.{3,})$/u)?.[1];
    const articleIpa = article && known(article);
    if (articleIpa) return "æbdol" + articleIpa.replace(/^ʔ/, "");
    const chars = [...word];
    for (let i = chars.length - 3; i >= 3; i--) {
      const first = chars.slice(0, i).join("");
      const second = chars.slice(i).join("");
      const firstIpa = known(first);
      const secondIpa = firstIpa && known(second);
      if (firstIpa && secondIpa) {
        return firstIpa + tail(secondIpa);
      }
    }
    return undefined;
  };

  const nisba = (word: string) => {
    const stem = /\u06cc$/.test(word) && [...word].length > 3 && known(word.slice(0, -1));
    return stem && !/[ɒæeoiuː]$/.test(stem) ? stem + "i" : undefined;
  };

  const toIpa = (word: string) => known(word) || compound(word) || nisba(word) || fallback(word);

  const silentHeSplit = (word: string) => {
    if (!joiner) return undefined;
    const whole = lookup(word);
    if (whole && !whole.includes("eh")) return undefined;
    const chars = [...word];
    for (let i = 2; i < chars.length - 2; i++) {
      if (chars[i] !== "\u0647") continue;
      const first = chars.slice(0, i + 1).join("");
      const second = chars.slice(i + 1).join("");
      if (second.startsWith("\u0627") || (second.length < 3 && first.length < 4)) continue;
      const firstIpa = known(first);
      const secondIpa = firstIpa?.endsWith("e") && known(second);
      if (secondIpa) return firstIpa + joiner + secondIpa.replace(/^ʔ/, "");
    }
    return undefined;
  };

  const withSuffix = (word: string) => {
    if (
      (lookup(word) && !(joiner && word.includes("\u200c"))) ||
      !/\u0647\u200c?\u0627\u06cc$/.test(word) ||
      /\u200c\u0647\u0627\u06cc$/.test(word)
    )
      return undefined;
    if (!word.includes("\u200c") && lookup(word.slice(0, -3))) return undefined;
    const stem = word.replace(/\u200c?\u0627\u06cc$/, "");
    const ipa = word.includes("\u200c") ? toIpa(stem) : known(stem);
    return ipa?.endsWith("e") ? ipa + joiner + "\u0294i" : undefined;
  };

  const convert = async (text: string) =>
    await wordSplitter(
      splitFaCompoundNames(normalizer.transliterate(text), joiner ? "\u200c" : " "),
      "fa",
      (word: string) =>
        withSuffix(word) ??
        silentHeSplit(word) ??
        (word.includes("\u200c") &&
        (!lookup(word) || (joiner && /[^\u200c]{2}\u0647\u200c/.test(word)))
          ? word
              .split("\u200c")
              .map((part, i) => (i ? tail(toIpa(part)) : toIpa(part)))
              .join(joiner)
          : toIpa(word)),
    );

  return (await mapText(text, convert)) as T;
};

export const faIpa = async <T = Text>(text: Text): Promise<T> => {
  const { convertText } = await import("helpers/convertText");
  const { faIpaQRules } = await import("data/fa/fa-ipa_q.rules");

  return (await convertText(text, faIpaQRules, { source: faIpaUvular })) as T;
};

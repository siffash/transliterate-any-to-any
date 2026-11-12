import { Text } from "types";

// ח and כ both read χ, but English spells ח h (Haifa, Hagai) and כ kh (Kokhav). The letters that can read
// χ or k pair up in order with the χ, x and k of the reading; when they all pair up, the χ of each ח
// becomes ħ. A ח with a geresh (ח׳) is the Arabic kh
const markHet = (text: string, ipa: string) => {
  const letters = [...text.matchAll(/ח[׳'’]?|[כךק]/g)].map(([letter]) => letter);
  const sounds = [...ipa.matchAll(/[χxk]/g)];
  if (letters.length !== sounds.length) return ipa;
  let marked = ipa;
  sounds.forEach((sound, i) => {
    if (letters[i] === "ח" && sound[0] !== "k") {
      marked = marked.slice(0, sound.index) + "ħ" + marked.slice(sound.index + 1);
    }
  });
  return marked;
};

// The article ה before a word the map knows keeps the word's capital (הוד השרון → Hod HaSharon)
const capitalizeArticles = (text: string, latin: string, hasArticle: (word: string) => boolean) => {
  const words = text.split(/([^\p{L}\p{M}'’׳]+)/u);
  const latinWords = latin.split(/([^\p{L}\p{M}'’׳]+)/u);
  if (words.length !== latinWords.length) return latin;
  return latinWords
    .map((word, i) =>
      hasArticle(words[i])
        ? word.replace(/^Ha(\p{Ll})/u, (_, letter: string) => `Ha${letter.toUpperCase()}`)
        : word,
    )
    .join("");
};

export const heEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heIpaMap } = await import("data/he/he-ipa.map");
  const { heIpaEnRules } = await import("data/he/he-ipa_en.rules");
  const { ipaEnRules } = await import("data/ipa/ipa-en.rules");

  const transliterator = RBT.fromRules(heIpaEnRules + ipaEnRules + "::Title;");
  const reading = (word: string) =>
    Object.prototype.hasOwnProperty.call(heIpaMap, word)
      ? heIpaMap[word].replace(/[ˈˌ]/g, "").replaceAll("ɡ", "g")
      : undefined;
  // Read as ה + a known word of three letters or more (not הדר Hadar), or known with a reading that is
  // ha + the word's (השרון haʃaʁon)
  const hasArticle = (word: string) => {
    if (!/^ה[\u05D0-\u05EA]{3,}$/.test(word)) return false;
    const stem = reading(word.slice(1));
    const whole = reading(word);
    return stem !== undefined && (whole === undefined || whole === `ha${stem}`);
  };
  const convert = (text: string, ipa: string) =>
    capitalizeArticles(text, transliterator.transliterate(markHet(text, ipa)), hasArticle);

  if (typeof text === "string") {
    return convert(text, await heIpa<string>(text));
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map((ipa, i) => convert(text[i], ipa));
  }
};

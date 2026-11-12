// Takes the place of the space and the ال of an Arabic article inside an Urdu name; like the joiner of
// joinUrduSuffixes, it isn't a letter, so wordSplitter reads the noun after it as a word of its own.
// Allah (اللہ) and Ilahi (الہی) are words of their own
const JOINER = "\uE001";

const SPACED = /(?<=[\p{L}\p{M}]) ال(?!ل|ٰ?ہ)([\p{L}\p{M}]{2,})/gu;
// عبد ("servant of") is written together with the article and the noun (عبدالغنی), but read apart: Abdul Ghani
const ABD = /(?<![\p{L}\p{M}])عبد ?ال(?!ل|ٰ?ہ)([\p{L}\p{M}]{2,})/gu;

// The article takes the sound of a sun letter (ud-Din, uz-Zaman), and a name keeps the ending joined to the
// word before it: Rafiuddin, Asaduzzaman, but Inzamamul Haq
const JOINED = new RegExp(`${JOINER}(sh|[tdrzsn])?(\\p{L}*)`, "giu");

/**
 * Marks the Arabic articles of Urdu names (انضمام الحق), unless the word is a name of its own (الطاف).
 * @param text - The Urdu text.
 * @param isWord - Whether a word is known as it is written.
 * @returns the text with a marker in place of each article and the space before it.
 */
export const markUrduArticles = (text: string, isWord: (word: string) => boolean) =>
  text
    .replace(ABD, (_, noun: string) => `عبد${JOINER}${noun.replace(/^(\p{L})\u0651/u, "$1")}`)
    .replace(SPACED, (match, noun: string) =>
      // The shadda of a sun letter (الرّحمن) is the article's, which joinUrduArticles brings back
      isWord(`ال${noun}`) ? match : `${JOINER}${noun.replace(/^(\p{L})\u0651/u, "$1")}`,
    );

/**
 * Joins the nouns marked by markUrduArticles to the word before them with the article (Inzamam + Haq →
 * Inzamamul Haq, Rafi + Din → Rafiuddin).
 * @param text - The converted Latin text.
 * @returns the text with each marked noun joined.
 */
export const joinUrduArticles = (text: string) =>
  text.replace(JOINED, (_, sun: string | undefined, rest: string, offset: number) => {
    // A word ending in u has the article's vowel already (Abu + Kalam → Abul Kalam, Alau + Din → Alauddin)
    const before = text.slice(0, offset);
    const vowel = /u$/i.test(before) ? "" : "u";
    // after Abd the noun stays a word of its own: Abdur Rahman
    if (sun && /(?<!\p{L})Abd$/iu.test(before)) return `${vowel}${sun.toLowerCase()} ${sun}${rest}`;
    return sun ? `${vowel}${sun.toLowerCase()}${sun.toLowerCase()}${rest}` : `${vowel}l ${rest}`;
  });

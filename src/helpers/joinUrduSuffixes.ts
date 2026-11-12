import { ALLAH_NAMES, SUFFIXES } from "data/ur/ur-suffixes";

// Takes the place of the space before an ending; it isn't a letter, so wordSplitter still reads the ending
// as a word of its own, and puts no space after it
const JOINER = "";

const SPACED = new RegExp(`(?<=[\\p{L}\\p{M}]) (${SUFFIXES.join("|")})(?![\\p{L}\\p{M}])`, "gu");

// اللہ after a name, spaced or not, is its ending -ullah (احسان اللہ Ehsanullah, عبداللہ Abdullah), unless it
// starts a name of its own (اللہ بخش Allah Bakhsh, ڈیرہ اللہ یار Dera Allah Yar)
const SPACED_ALLAH = new RegExp(
  `(?<=[\\p{L}\\p{M}]) ?(الل\\p{M}*ہ)(?! (?:${ALLAH_NAMES.join("|")})(?![\\p{L}\\p{M}]))(?![\\p{L}\\p{M}])`,
  "gu",
);

// An a ending the word before merges with the a of آباد (شجاع آباد → Shujabad); Allah becomes -ullah, which
// most languages end without an h (Сайфулла)
const JOINED = new RegExp(
  `([aɑ]ː?)${JOINER}[aAɑ]ː?(?!l)|${JOINER}(allɑːɦ|Allah)|${JOINER}(\\p{L}?)`,
  "gu",
);

/**
 * Marks the endings of Urdu place names written as a word of their own (اسلام آباد).
 * @param text - The Urdu text.
 * @returns the text with a marker in place of the space before each ending.
 */
export const markUrduSuffixes = (text: string) =>
  text.replace(SPACED, `${JOINER}$1`).replace(SPACED_ALLAH, `${JOINER}$1`);

/**
 * Joins the endings marked by markUrduSuffixes to the word before them (Islam + Abad → Islamabad).
 * @param text - The converted text, Latin or IPA.
 * @returns the text with each marked ending joined, its first letter lowercased.
 */
export const joinUrduSuffixes = (text: string) =>
  text.replace(JOINED, (_, vowel?: string, allah?: string, letter?: string) =>
    allah ? (allah === "Allah" ? "ullah" : "ʊllɑːh") : (vowel ?? letter!.toLowerCase()),
  );

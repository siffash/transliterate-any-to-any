import { Segmenter } from "intl-segmenter";
import { Language } from "types";
import { languages } from "helpers/constants";

type Kind = "word" | "open" | "close" | "separator" | "inline";

// Punctuation that a language's regex also matches, because Unicode assigns it
// to the Han/kana or Arabic scripts. It is replaced by a script-neutral
// equivalent so that the output stays valid in any target script.
const PUNCTUATION: Record<string, [replacement: string, kind: Kind]> = {
  "。": [".", "close"],
  "｡": [".", "close"],
  "、": [",", "close"],
  "､": [",", "close"],
  "،": [",", "close"],
  "؛": [";", "close"],
  "؟": ["?", "close"],
  "۔": [".", "close"],
  "「": ['"', "open"],
  "」": ['"', "close"],
  "『": ['"', "open"],
  "』": ['"', "close"],
  "《": ['"', "open"],
  "》": ['"', "close"],
  "〈": ['"', "open"],
  "〉": ['"', "close"],
  "【": ["[", "open"],
  "】": ["]", "close"],
  "〔": ["[", "open"],
  "〕": ["]", "close"],
  "〜": ["~", "inline"],
  "・": ["", "separator"],
  "​": ["", "separator"],
};

// surname: a Chinese surname split off its given name (see segmentChinese)
type Segment = { segment: string; isWordLike?: boolean; surname?: boolean };

// Intl.Segmenter splits Thai words missing from its dictionary (mostly names) into
// pieces that can't be read alone: a bare consonant (ปรียา|ภ|รณ์), a coda silenced
// with ์ (รณ์), or a vowel sign without a consonant (ธีร|ะ|กุล)
const THAI_KARAN = /[ก-ฮ](?:ิ|ุ)?์/g;
// Vowel signs ะ–ฺ, leading vowels เ–ๅ and ็ (no character class: they are combining marks)
const isThaiVowel = (char: string) => {
  const code = char.codePointAt(0)!;
  return (
    (code >= 0x0e30 && code <= 0x0e3a) || (code >= 0x0e40 && code <= 0x0e45) || code === 0x0e47
  );
};
const isThaiFragment = (segment: string) => {
  const core = segment.replace(THAI_KARAN, "");
  const consonants = core.match(/[ก-ฮ]/g)?.length ?? 0;
  return (
    consonants === 0 || (consonants === 1 && !Array.from(core).some(isThaiVowel) && core !== "ณ")
  );
};

const mergeThaiFragments = (segments: Segment[]): Segment[] => {
  const result: Segment[] = [];
  let carry = "";
  for (const { segment, isWordLike } of segments) {
    if (!isWordLike || !/[ก-๛]/.test(segment)) {
      if (carry) result.push({ segment: carry, isWordLike: true });
      carry = "";
      result.push({ segment, isWordLike });
      continue;
    }
    const word = carry + segment;
    carry = "";
    const previous = result[result.length - 1];
    if (isThaiFragment(segment)) {
      const core = segment.replace(THAI_KARAN, "");
      const coda = segment.includes("์") || !/[ก-ฮ]/.test(core);
      if (coda && previous?.isWordLike && /[ก-๛]$/.test(previous.segment)) {
        previous.segment += word;
        continue;
      }
      if (!coda) {
        carry = word;
        continue;
      }
    }
    result.push({ segment: word, isWordLike: true });
  }
  if (carry) {
    const previous = result[result.length - 1];
    if (previous?.isWordLike && /[ก-๛]$/.test(previous.segment)) previous.segment += carry;
    else result.push({ segment: carry, isWordLike: true });
  }
  return result;
};

type WordSegmenter = (text: string) => Promise<Segment[]> | Segment[];

const getIntlSegmenter = (language: Language): WordSegmenter => {
  const segmenter = new Segmenter(language, { granularity: "word" });
  return text => Array.from(segmenter.segment(text));
};

let warnedChineseFallback = false;

// jieba is WebAssembly, which some environments don't run or load (no
// WebAssembly, a CSP without 'wasm-unsafe-eval', a bundler that doesn't emit
// its .wasm, offline in a browser): Chinese then falls back to Intl.Segmenter,
// whose words are worse but still words. The next call tries jieba again,
// unless there's no WebAssembly at all.
const getChineseSegmenter = async (): Promise<WordSegmenter> => {
  const fallback = getIntlSegmenter("zh");
  const warn = (e: unknown) => {
    if (warnedChineseFallback) return;
    warnedChineseFallback = true;
    console.warn(
      "transliterate-any-to-any: Chinese word segmentation (jieba-wasm) failed, so Intl.Segmenter splits Chinese into words instead",
      e,
    );
  };
  if (typeof WebAssembly === "undefined") {
    warn(new Error("WebAssembly is not available"));
    return fallback;
  }
  try {
    const segment = await (await import("helpers/segmentChinese")).loadChineseSegmenter();
    return text => {
      try {
        return segment(text);
      } catch (e) {
        warn(e);
        return fallback(text);
      }
    };
  } catch (e) {
    warn(e);
    return fallback;
  }
};

// Chinese and Japanese words come from the dictionaries the library ships,
// because Intl.Segmenter splits them according to the engine's ICU data,
// which on Android lacks the CJ dictionary (see loadChineseSegmenter, segmentJapanese)
const getWordSegmenter = async (language: Language): Promise<WordSegmenter> => {
  if (language === "zh") return getChineseSegmenter();
  if (language === "ja") return (await import("helpers/segmentJapanese")).segmentJapanese;
  return getIntlSegmenter(language);
};

// Whether a space goes between the previous token and the next one, e.g.
// `word word`, `word, word`, `word "word"`, but `"word"` and `word.`
const needsSpace = (prev: Kind | undefined, next: Kind) =>
  (next === "word" || next === "open") &&
  (prev === "word" || prev === "close" || prev === "separator");

export const wordSplitter = async (
  input: string,
  language: Language,
  fn?: (word: string) => string | Promise<string>,
  skipSegmenter?: boolean,
  // Write a surname together with the given name, as Korean does (마오쩌둥)
  joinNames?: boolean,
): Promise<string> => {
  const { regex } = languages[language];
  const re = new RegExp(`[${regex}\\p{L}]+`, "gu");
  const segment = skipSegmenter ? undefined : await getWordSegmenter(language);
  const parts: string[] = [];
  let cursor = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(input)) !== null) {
    if (m.index > cursor) {
      parts.push(input.slice(cursor, m.index));
    }

    let segments = segment ? await segment(m[0]) : [{ segment: m[0], isWordLike: true }];
    if (language === "th") segments = mergeThaiFragments(segments);

    let prev: Kind | undefined;
    let afterSurname = false;
    const push = async (kind: Kind, text: string) => {
      if (needsSpace(prev, kind) && !(afterSurname && kind === "word")) {
        parts.push(" ");
      }
      parts.push(kind === "word" && fn ? await fn(text) : text);
      prev = kind;
    };

    for (const { segment, isWordLike, surname } of segments) {
      if (isWordLike) {
        await push("word", segment);
        afterSurname = Boolean(joinNames && surname);
      } else {
        for (const char of segment) {
          const [replacement, kind] = PUNCTUATION[char] ?? [char, "inline"];
          await push(kind, replacement);
        }
      }
    }

    cursor = re.lastIndex;
  }

  if (cursor < input.length) {
    parts.push(input.slice(cursor));
  }

  return parts.join("").replace(/ {2,}/g, " ");
};

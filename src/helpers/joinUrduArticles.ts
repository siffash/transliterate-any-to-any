const JOINER = "\uE001";

const SPACED = /(?<=[\p{L}\p{M}]) ال(?!ل|ٰ?ہ)([\p{L}\p{M}]{2,})/gu;
const ABD = /(?<![\p{L}\p{M}])عبد ?ال(?!ل|ٰ?ہ)([\p{L}\p{M}]{2,})/gu;

const JOINED = new RegExp(`${JOINER}(sh|[tdrzsn])?(\\p{L}*)`, "giu");

export const markUrduArticles = (text: string, isWord: (word: string) => boolean) =>
  text
    .replace(ABD, (_, noun: string) => `عبد${JOINER}${noun.replace(/^(\p{L})\u0651/u, "$1")}`)
    .replace(SPACED, (match, noun: string) =>
      isWord(`ال${noun}`) ? match : `${JOINER}${noun.replace(/^(\p{L})\u0651/u, "$1")}`,
    );

export const joinUrduArticles = (text: string) =>
  text.replace(JOINED, (_, sun: string | undefined, rest: string, offset: number) => {
    const before = text.slice(0, offset);
    const vowel = /u$/i.test(before) ? "" : "u";
    if (sun && /(?<!\p{L})Abd$/iu.test(before)) return `${vowel}${sun.toLowerCase()} ${sun}${rest}`;
    return sun ? `${vowel}${sun.toLowerCase()}${sun.toLowerCase()}${rest}` : `${vowel}l ${rest}`;
  });

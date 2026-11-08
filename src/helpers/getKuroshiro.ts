import type { KuromojiToken } from "kuroshiro-analyzer-kuromoji";
import { jaReadingsMap } from "data/ja/ja-readings.map";

type Analyzer = { parse(text: string): Promise<KuromojiToken[]> };

let kuroshiroPromise: Promise<{ kuroshiro: any; analyzer: Analyzer }> | undefined;

// kuroshiro romanizes each morpheme separately, so a sokuon ending one (行きたかっ|た)
// became "tsu" instead of doubling the next consonant. It joins such morphemes
// itself, but only verbs and adjectives, so this joins the rest (e.g. たかっ).
const joinSokuon = (tokens: KuromojiToken[]) => {
  const joined: KuromojiToken[] = [];
  for (const token of tokens) {
    const last = joined.at(-1);
    if (last?.reading && token.reading && /[っッ]$/.test(last.surface_form)) {
      joined[joined.length - 1] = {
        ...last,
        surface_form: last.surface_form + token.surface_form,
        reading: last.reading + token.reading,
        pronunciation:
          (last.pronunciation ?? last.reading) + (token.pronunciation ?? token.reading),
      };
    } else {
      joined.push(token);
    }
  }
  return joined;
};

// Kanji that end given names: at the end of a name they join the kanji before them (純+也 Jun'ya)
const NAME_ENDINGS = new Set("也哉輔嗣汰");

// kuromoji's pronunciation form, which kuroshiro romanizes: long o and u are written with ー (コウ → コー)
const toPronunciation = (reading: string) =>
  reading.replace(
    /([オコソトノホモヨロゴゾドボポョ]|[ウクスツヌフムユルグズヅブプュ])ウ/gu,
    "$1ー",
  );

// Hepburn writes a long i as ii (Niigata, not Nīgata): the pronunciation (ニーガタ)
// gets its イ back wherever the reading (ニイガタ) has one
const restoreLongI = (token: KuromojiToken): KuromojiToken => {
  const { reading, pronunciation } = token;
  if (!reading || !pronunciation || reading.length !== pronunciation.length) return token;
  const restored = [...pronunciation]
    .map((kana, i) => (kana === "ー" && reading[i] === "イ" ? "イ" : kana))
    .join("");
  return restored === pronunciation ? token : { ...token, pronunciation: restored };
};

// A name ending follows a one- or two-mora reading (ジュン, ケイ, トモ); a longer one is a
// whole given name (敬 タカシ, 浩 ヒロシ), so 敬輔 would become Takashisuke
const isNameStart = (token?: KuromojiToken) =>
  !!token?.reading && token.reading.replace(/[ャュョァィゥェォ]/gu, "").length <= 2;

// Gives the kanji kuromoji has no reading for (純也, 翔哉) one from jaReadingsMap
const addReadings = async (
  tokens: KuromojiToken[],
  parse: (text: string) => Promise<KuromojiToken[]>,
) => {
  const result: KuromojiToken[] = [];
  for (const [i, token] of tokens.entries()) {
    const chars = [...token.surface_form];
    if (token.reading || !chars.every(char => Object.hasOwn(jaReadingsMap, char))) {
      result.push(token);
      continue;
    }
    const reading = chars.map(char => jaReadingsMap[char]).join("");
    const pronunciation = toPronunciation(reading);
    let last = result.at(-1);
    const next = tokens[i + 1]?.surface_form ?? "";
    if (
      last?.reading &&
      NAME_ENDINGS.has(token.surface_form) &&
      /^\p{scx=Han}+$/u.test(last.surface_form) &&
      !/^\p{scx=Han}/u.test(next)
    ) {
      // the reading kuromoji gives the kanji on its own may be the short one (敬 ケイ)
      if (!isNameStart(last)) {
        const alone = await parse(last.surface_form);
        if (alone.length === 1 && isNameStart(alone[0])) {
          last = { ...last, reading: alone[0].reading, pronunciation: alone[0].pronunciation };
        }
      }
      if (isNameStart(last)) {
        result[result.length - 1] = {
          ...last,
          surface_form: last.surface_form + token.surface_form,
          reading: last.reading + reading,
          pronunciation: (last.pronunciation ?? last.reading) + pronunciation,
        };
        continue;
      }
    }
    result.push({ ...token, reading, pronunciation });
  }
  return result;
};

const load = () => {
  kuroshiroPromise ??= (async () => {
    const { resolveCjsDefault } = await import("helpers/resolveCjsDefault");
    const Kuroshiro = resolveCjsDefault(await import("kuroshiro"));
    const KuromojiAnalyzer = resolveCjsDefault(await import("kuroshiro-analyzer-kuromoji"));
    const { isNode, isDeno, isBun } = await import("browser-or-node");
    const kuroshiro = new Kuroshiro();
    const analyzer = new KuromojiAnalyzer({
      dictPath: isNode || isDeno || isBun ? undefined : __KUROMOJI_DICT_URL__,
    });
    const parse = analyzer.parse.bind(analyzer);
    analyzer.parse = async (text: string) =>
      joinSokuon((await addReadings(await parse(text), parse)).map(restoreLongI));
    await kuroshiro.init(analyzer);
    return { kuroshiro, analyzer };
  })().catch(e => {
    kuroshiroPromise = undefined;
    throw e;
  });
  return kuroshiroPromise;
};

export const getKuroshiro = async () => (await load()).kuroshiro;

// kuroshiro's kuromoji, which also splits Japanese into words (see segmentJapanese)
export const getKuromojiAnalyzer = async () => (await load()).analyzer;

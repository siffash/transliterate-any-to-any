import type { KuromojiToken } from "kuroshiro-analyzer-kuromoji";

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
    analyzer.parse = async (text: string) => joinSokuon(await parse(text));
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

import type { KuromojiToken } from "kuroshiro-analyzer-kuromoji";
import { getKuromojiAnalyzer } from "helpers/getKuroshiro";

type LatticeNode = { name: number; type: string; length: number };
type Tokenizer = {
  getLattice(text: string): { nodes_end_at: (LatticeNode[] | undefined)[] };
  viterbi_searcher: { search(lattice: unknown): LatticeNode[] };
  token_info_dictionary: { getFeatures(name: number): string | null };
  formatter: {
    formatEntry(name: number, position: number, type: string, features: string[]): KuromojiToken;
  };
};

const COPULAS = new Set(["だ", "です"]);
const VERB_ENDINGS = new Set(["て", "で", "ば", "ちゃ", "じゃ"]);

const joinsPrevious = (token: KuromojiToken) =>
  (token.pos === "助動詞" && !COPULAS.has(token.basic_form)) ||
  (token.pos === "助詞" &&
    token.pos_detail_1 === "接続助詞" &&
    VERB_ENDINGS.has(token.surface_form)) ||
  (token.pos === "動詞" && token.pos_detail_1 === "接尾");

const sameReading = (a: string, b: string) =>
  a.replaceAll("ニッポン", "ニホン") === b.replaceAll("ニッポン", "ニホン");

const INFIXES: Record<string, string> = { ー: "ー", ノ: "ノ", ヶ: "が" };
const CANNOT_START = /^[んンっッゃゅょャュョぁぃぅぇぉァィゥェォ]/u;

const isInfix = (token: KuromojiToken) =>
  Object.hasOwn(INFIXES, token.surface_form) && (token.pos === "記号" || !token.reading);

const isOrganization = (features: string) => /^[^,]*,名詞,固有名詞,組織,/.test(features);

const splitCompound = (tokenizer: Tokenizer, token: KuromojiToken): KuromojiToken[] => {
  const { surface_form: word, reading } = token;
  if ([...word].length < 4 || !reading || !/\p{scx=Han}/u.test(word)) return [token];
  const split = (skipOrganizations: boolean) => {
    const lattice = tokenizer.getLattice(word);
    lattice.nodes_end_at = lattice.nodes_end_at.map(nodes =>
      nodes?.filter(
        node =>
          !(
            node.type === "KNOWN" &&
            (node.length >= word.length ||
              (skipOrganizations &&
                isOrganization(tokenizer.token_info_dictionary.getFeatures(node.name) ?? "")))
          ),
      ),
    );
    const parts = tokenizer.viterbi_searcher.search(lattice).map(node => {
      const features =
        node.type === "KNOWN" && tokenizer.token_info_dictionary.getFeatures(node.name);
      return features
        ? tokenizer.formatter.formatEntry(node.name, 0, node.type, features.split(","))
        : null;
    });
    return parts.length >= 2 &&
      sameReading(parts.map(part => part?.reading ?? "").join(""), reading)
      ? (parts as KuromojiToken[])
      : null;
  };
  const parts = split(true) ?? split(false);
  if (!parts) return [token];
  return parts.flatMap(part => splitCompound(tokenizer, part));
};

export const segmentJapanese = async (text: string) => {
  const analyzer = await getKuromojiAnalyzer();
  const tokenizer = (analyzer as unknown as { _analyzer: Tokenizer })._analyzer;
  const tokens = (await analyzer.parse(text)).flatMap(token =>
    token.pos === "名詞" && token.pos_detail_1 === "固有名詞"
      ? splitCompound(tokenizer, token)
      : [token],
  );
  const words: { segment: string; isWordLike: boolean }[] = [];
  let joinsNext = false;
  for (const token of tokens) {
    const last = words.at(-1);
    if (last?.isWordLike && isInfix(token)) {
      last.segment += INFIXES[token.surface_form];
      joinsNext = token.surface_form !== "ー";
      continue;
    }
    const parts = token.surface_form.split(/([^\p{L}\p{M}]+)/u).filter(Boolean);
    parts.forEach((part, i) => {
      const isWordLike = token.pos !== "記号" && /\p{L}/u.test(part);
      const last = words.at(-1);
      if (
        i === 0 &&
        last?.isWordLike &&
        isWordLike &&
        (joinsNext || joinsPrevious(token) || CANNOT_START.test(part))
      ) {
        last.segment += part;
      } else {
        words.push({ segment: part, isWordLike });
      }
    });
    joinsNext = false;
  }
  return words;
};

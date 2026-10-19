import type { KuromojiToken } from "kuroshiro-analyzer-kuromoji";
import { getKuromojiAnalyzer } from "helpers/getKuroshiro";

// kuromoji's internals (it's bundled at a fixed version), used to split compounds
type LatticeNode = { name: number; type: string; length: number };
type Tokenizer = {
  getLattice(text: string): { nodes_end_at: (LatticeNode[] | undefined)[] };
  viterbi_searcher: { search(lattice: unknown): LatticeNode[] };
  token_info_dictionary: { getFeatures(name: number): string | null };
  formatter: {
    formatEntry(name: number, position: number, type: string, features: string[]): KuromojiToken;
  };
};

// Copulas start a word of their own (都市 です), while other auxiliary verbs stay
// with the word they inflect (食べ+たい, 買い+まし+た)
const COPULAS = new Set(["だ", "です"]);
// Conjunctive particles that are part of a verb form (使っ+て, 読ん+で, 行け+ば)
const VERB_ENDINGS = new Set(["て", "で", "ば", "ちゃ", "じゃ"]);

const joinsPrevious = (token: KuromojiToken) =>
  (token.pos === "助動詞" && !COPULAS.has(token.basic_form)) ||
  (token.pos === "助詞" &&
    token.pos_detail_1 === "接続助詞" &&
    VERB_ENDINGS.has(token.surface_form)) ||
  // Passive and causative endings (食べ+られる, 行か+せる)
  (token.pos === "動詞" && token.pos_detail_1 === "接尾");

// 日本 reads either Nihon or Nippon
const sameReading = (a: string, b: string) =>
  a.replaceAll("ニッポン", "ニホン") === b.replaceAll("ニッポン", "ニホン");

// kuromoji's dictionary has whole names of companies and places (三菱商事,
// 東日本旅客鉄道, 鹿児島湾), which are romanized as separate words. They're
// split the way kuromoji would without that entry, but only if the parts
// read the same as the whole (unlike 瀬戸内海: Setonaikai, not Setouchi Umi).
const splitCompound = (tokenizer: Tokenizer, token: KuromojiToken): KuromojiToken[] => {
  const { surface_form: word, reading } = token;
  if ([...word].length < 4 || !reading) return [token];
  const lattice = tokenizer.getLattice(word);
  lattice.nodes_end_at = lattice.nodes_end_at.map(nodes =>
    nodes?.filter(node => !(node.type === "KNOWN" && node.length >= word.length)),
  );
  const parts = tokenizer.viterbi_searcher.search(lattice).map(node => {
    const features =
      node.type === "KNOWN" && tokenizer.token_info_dictionary.getFeatures(node.name);
    return features
      ? tokenizer.formatter.formatEntry(node.name, 0, node.type, features.split(","))
      : null;
  });
  if (parts.length < 2 || !sameReading(parts.map(part => part?.reading ?? "").join(""), reading))
    return [token];
  return (parts as KuromojiToken[]).flatMap(part => splitCompound(tokenizer, part));
};

/**
 * Japanese words, built from kuromoji's morphemes: Intl.Segmenter splits
 * Japanese differently depending on the engine's ICU data (without its CJ
 * dictionary, e.g. in Android's Chrome and WebView, only where the script
 * changes: 大|きい), and splits verbs mid-way even with it (食|べた|い).
 */
export const segmentJapanese = async (text: string) => {
  const analyzer = await getKuromojiAnalyzer();
  const tokenizer = (analyzer as unknown as { _analyzer: Tokenizer })._analyzer;
  const tokens = (await analyzer.parse(text)).flatMap(token =>
    token.pos === "名詞" && token.pos_detail_1 === "固有名詞"
      ? splitCompound(tokenizer, token)
      : [token],
  );
  const words: { segment: string; isWordLike: boolean }[] = [];
  for (const token of tokens) {
    // A morpheme may include punctuation (e.g. ヴィクトリア・), which is split off
    const parts = token.surface_form.split(/([^\p{L}\p{M}]+)/u).filter(Boolean);
    parts.forEach((part, i) => {
      const isWordLike = token.pos !== "記号" && /\p{L}/u.test(part);
      const last = words.at(-1);
      if (i === 0 && last?.isWordLike && isWordLike && joinsPrevious(token)) {
        last.segment += part;
      } else {
        words.push({ segment: part, isWordLike });
      }
    });
  }
  return words;
};

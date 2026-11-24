import { urIpaMap } from "data/ur/ur-ipa.map";

export const lookupUrIpa = (word: string) =>
  urIpaMap[word] ??
  urIpaMap[word.replace(/^إ/, "ا")] ??
  urIpaMap[word.replace(/[\u064B-\u0652\u0670]/g, "")] ??
  urIpaMap[word.replace(/[\u064B-\u0652]/g, "").replace(/\u0670/g, "ا")];

const nisba = (word: string) => {
  const stem = /\u06cc$/.test(word) ? lookupUrIpa(word.slice(0, -1)) : "";
  return stem && !/[ɑeoiuəɪʊaː]$/.test(stem) ? stem + "iː" : "";
};

const compound = (word: string) => {
  if (word.startsWith("\u0627\u0644")) return "";
  const chars = [...word];
  for (let i = chars.length - 3; i >= 3; i--) {
    const first = lookupUrIpa(chars.slice(0, i).join(""));
    const second = first && lookupUrIpa(chars.slice(i).join(""));
    if (first && second) return first + second.replace(/^ʔ/, "");
  }
  return "";
};

export const deriveUrIpa = (word: string) =>
  lookupUrIpa(word) || ([...word].length < 4 ? "" : nisba(word) || compound(word));

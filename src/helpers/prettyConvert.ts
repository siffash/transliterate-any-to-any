export const prettyConvert = async (rules: string, examples: string, limit = Infinity) => {
  const { RBT } = await import("icu-transliterator");
  return examples
    .split(/\n/)
    .filter(Boolean)
    .map(list => list.split(", ").slice(0, limit))
    .flat()
    .map(item => `${item}>${RBT.fromRules(rules).transliterate(item)}`)
    .join("\n");
};

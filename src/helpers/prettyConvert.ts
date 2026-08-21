export const prettyConvert = async (rules: string, examples: string, limit = Infinity) => {
  const { RBT_JS } = await import("helpers/rbt");
  return examples
    .split(/\n/)
    .filter(Boolean)
    .map(list => list.split(", ").slice(0, limit))
    .flat()
    .map(item => `${item}>${RBT_JS.fromRules(rules).transliterate(item)}`)
    .join("\n");
};

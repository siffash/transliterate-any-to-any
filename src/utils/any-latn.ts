export const anyLatn = async (text: string) => {
  const { RBT } = await import("icu-transliterator");
  const { anyLatnRules } = await import("constants/any-latn.rules");

  const transliterator = RBT.fromRules(anyLatnRules);
  return transliterator.transliterate(text);
};

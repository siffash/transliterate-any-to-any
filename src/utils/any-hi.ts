export const anyHi = async (text: string) => {
  const { RBT } = await import("icu-transliterator");
  const { anyHiRules } = await import("constants/any-hi.rules");

  const transliterator = RBT.fromRules(anyHiRules);
  return transliterator.transliterate(text);
};

export const anyJa = async (text: string) => {
  const { RBT } = await import("icu-transliterator");
  const { anyJaRules } = await import("constants/any-ja.rules");

  const transliterator = RBT.fromRules(anyJaRules);
  return transliterator.transliterate(text);
};

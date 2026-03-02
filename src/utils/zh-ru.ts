export const zhRu = async (text: string) => {
  const { RBT } = await import("icu-transliterator");
  const { zhRuRules } = await import("constants/zh-ru.rules");

  const transliterator = RBT.fromRules(zhRuRules);
  return transliterator.transliterate(text);
};

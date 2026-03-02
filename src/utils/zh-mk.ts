export const zhMk = async (text: string) => {
  const { RBT } = await import("icu-transliterator");
  const { zhMkRules } = await import("constants/zh-mk.rules");

  const transliterator = RBT.fromRules(zhMkRules);
  return transliterator.transliterate(text);
};

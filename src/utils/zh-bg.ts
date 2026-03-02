export const zhBg = async (text: string) => {
  const { RBT } = await import("icu-transliterator");
  const { zhBgRules } = await import("constants/zh-bg.rules");

  const transliterator = RBT.fromRules(zhBgRules);
  return transliterator.transliterate(text);
};

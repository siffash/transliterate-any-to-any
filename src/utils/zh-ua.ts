export const zhUa = async (text: string) => {
  const { RBT } = await import("icu-transliterator");
  const { zhUaRules } = await import("constants/zh-ua.rules");

  const transliterator = RBT.fromRules(zhUaRules);
  return transliterator.transliterate(text);
};

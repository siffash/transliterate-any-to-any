export const zhLatn = async (text: string) => {
  const { pinyin } = await import("pinyin-pro");
  return pinyin(text);
};

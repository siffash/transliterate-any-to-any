import { Text } from "types";

export const zhLatn = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const convert = async (text: string) => {
    const split = wordSplitter(text, "zh");
    return pinyin(split, { separator: "" });
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

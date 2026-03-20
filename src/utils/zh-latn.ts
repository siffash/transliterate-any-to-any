import { Text } from "types/languages";

export const zhLatn = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");

  if (typeof text === "string") {
    return pinyin(text);
  } else {
    return text.map(text => pinyin(text));
  }
};

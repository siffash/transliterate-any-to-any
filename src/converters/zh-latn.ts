import { Text } from "types";

export const zhLatn = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");

  const convert = async (text: string) => {
    return pinyin(text, { separator: "" });
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

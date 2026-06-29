import { Text } from "types";

export const zhLatn = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { splitZh } = await import("helpers/splitZh");

  const convert = async (text: string) => {
    const split = splitZh(text);
    return pinyin(split, { separator: "" });
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

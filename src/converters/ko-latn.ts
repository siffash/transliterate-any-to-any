import { Text } from "types";

export const koLatn = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { wordSplitter } = await import("helpers/wordSplitter");

  const convert = async (text: string) => {
    const split = wordSplitter(text, "ko");
    return Aromanize.romanize(split);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

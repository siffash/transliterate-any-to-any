import { Text } from "types";

export const zhLatn = async <T = Text>(text: Text, givenNameSeparator?: string): Promise<T> => {
  const { zhPinyin } = await import("helpers/zhPinyin");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { mapText } = await import("helpers/convertText");

  return (await mapText(text, text =>
    wordSplitter(
      text,
      "zh",
      givenNameSeparator === undefined
        ? text => zhPinyin(text)
        : (text, givenName) => zhPinyin(text, givenName ? givenNameSeparator : "'"),
    ),
  )) as T;
};

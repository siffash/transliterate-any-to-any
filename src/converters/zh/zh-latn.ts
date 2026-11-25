import { Text } from "types";

export const zhLatn = async <T = Text>(text: Text, givenNameSeparator?: string): Promise<T> => {
  const { zhPinyin } = await import("helpers/zhPinyin");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { mapText } = await import("helpers/convertText");
  const { stripZhUnit } = await import("helpers/zhUnits");

  return (await mapText(text, text =>
    wordSplitter(
      text,
      "zh",
      givenNameSeparator === undefined
        ? text => zhPinyin(stripZhUnit(text))
        : (text, givenName) => zhPinyin(stripZhUnit(text), givenName ? givenNameSeparator : "'"),
    ),
  )) as T;
};

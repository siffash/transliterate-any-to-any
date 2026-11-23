import { Text } from "types";

export const thLatn = async <T = Text>(text: Text): Promise<T> => {
  const { thRtgs } = await import("converters/th/th-ipa");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");
  const { mapText } = await import("helpers/convertText");

  const toRtgs = await thRtgs();

  return (await mapText(text, text =>
    wordSplitter(normalizeTh(text), "th", text => text.replace(/[^๐-๙]+/g, part => toRtgs(part))),
  )) as T;
};

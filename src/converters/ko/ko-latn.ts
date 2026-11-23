import { Text } from "types";
import type { KoSeparator } from "helpers/normalizeKo";

export const koLatn = async <T = Text>(
  text: Text,
  separators: KoSeparator = {
    syllable: "‧",
    unit: "‧",
  },
): Promise<T> => {
  const Aromanize = (await import("aromanize")).default;
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { mapText } = await import("helpers/convertText");

  return (await mapText(text, text =>
    wordSplitter(text, "ko", text =>
      normalizeKo(text, text => Aromanize.romanize(text), "latn", separators),
    ),
  )) as T;
};

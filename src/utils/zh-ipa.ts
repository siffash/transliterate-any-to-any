import { Text } from "types/languages";

export const zhIpa = async <T = Text>(text: Text): Promise<T> => {
  const { toIPA } = await import("phonemize/zh");

  if (typeof text === "string") {
    return toIPA(text) as T;
  } else {
    return text.map(text => toIPA(text)) as T;
  }
};

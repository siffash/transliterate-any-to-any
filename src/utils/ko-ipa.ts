import { Text } from "types/languages";

export const koIpa = async <T = Text>(text: Text): Promise<T> => {
  const { phonemize } = await import("phonemize/all");

  const convert = async (text: string) => {
    return phonemize(text, { anyAscii: true });
  };

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(async text => await convert(text)))) as T;
  }
};

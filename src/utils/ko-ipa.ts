import { Text } from "types/languages";

export const koIpa = async (text: Text) => {
  const { phonemize } = await import("phonemize/all");

  const convert = async (text: string) => {
    return phonemize(text, { anyAscii: true });
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return Promise.all(text.map(async text => await convert(text)));
  }
};

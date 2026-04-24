import { Text } from "types/languages";

export const zhIpa = async (text: Text) => {
  const { toIPA } = await import("phonemize/zh");

  if (typeof text === "string") {
    return toIPA(text);
  } else {
    return text.map(text => toIPA(text));
  }
};

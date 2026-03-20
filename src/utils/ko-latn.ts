import { Text } from "types/languages";

export const koLatn = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;

  if (typeof text === "string") {
    return Aromanize.romanize(text);
  } else {
    return text.map(text => Aromanize.romanize(text));
  }
};

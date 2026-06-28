import { Text } from "types";

export const koLatn = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;

  const convert = async (text: string) => {
    return Aromanize.romanize(text);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};

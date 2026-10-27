import { Text } from "types";

export const mkKk = async (text: Text) => {
  const { mkRu } = await import("converters/mk/mk-ru");

  return mkRu(text);
};

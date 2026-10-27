import { Text } from "types";

export const msKk = async (text: Text) => {
  const { msRu } = await import("converters/ms/ms-ru");

  return msRu(text);
};

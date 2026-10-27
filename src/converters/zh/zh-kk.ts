import { Text } from "types";

export const zhKk = async (text: Text) => {
  const { zhRu } = await import("converters/zh/zh-ru");

  return zhRu(text);
};

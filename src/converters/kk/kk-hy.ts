import { Text } from "types";

export const kkHy = async (text: Text) => {
  const { kkRu } = await import("converters/kk/kk-ru");
  const { ruHy } = await import("converters/ru/ru-hy");

  return ruHy(await kkRu(text));
};

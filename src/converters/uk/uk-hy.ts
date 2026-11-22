import { Text } from "types";

export const ukHy = async (text: Text) => {
  const { ukRu } = await import("converters/uk/uk-ru");
  const { ruHy } = await import("converters/ru/ru-hy");

  return ruHy(await ukRu<Text>(text));
};

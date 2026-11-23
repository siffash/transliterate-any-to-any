import { Text } from "types";

export const ruUk = async <T = Text>(text: Text): Promise<T> => {
  const { convertWithMap } = await import("helpers/convertWithMap");
  const { ruUkRules } = await import("data/ru/ru-uk.rules");
  const { ruUkMap } = await import("data/ru/ru-uk.map");

  return convertWithMap<T>(text, ruUkRules, ruUkMap, "ru", "uk");
};

import { Text } from "types";

export const ukRu = async <T = Text>(text: Text): Promise<T> => {
  const { convertWithMap } = await import("helpers/convertWithMap");
  const { ukRuRules } = await import("data/uk/uk-ru.rules");
  const { ukRuMap } = await import("data/uk/uk-ru.map");

  return convertWithMap<T>(text, ukRuRules, ukRuMap, "uk", "ru");
};

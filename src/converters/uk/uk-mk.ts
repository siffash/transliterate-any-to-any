import { Text } from "types";

export const ukMk = async <T = Text>(text: Text): Promise<T> => {
  const { convertWithMap } = await import("helpers/convertWithMap");
  const { ukMkRules } = await import("data/uk/uk-mk.rules");
  const { ukMkMap } = await import("data/uk/uk-mk.map");

  return convertWithMap<T>(text, ukMkRules, ukMkMap, "uk", "mk");
};

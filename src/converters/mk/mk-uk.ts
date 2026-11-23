import { Text } from "types";

export const mkUk = async <T = Text>(text: Text): Promise<T> => {
  const { convertWithMap } = await import("helpers/convertWithMap");
  const { mkUkRules } = await import("data/mk/mk-uk.rules");
  const { mkUkMap } = await import("data/mk/mk-uk.map");

  return convertWithMap<T>(text, mkUkRules, mkUkMap, "mk", "uk");
};

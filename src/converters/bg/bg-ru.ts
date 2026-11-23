import { Text } from "types";

export const bgRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyphenateBgPlaces } = await import("helpers/hyphenateBgPlaces");
  const { bgRuRules } = await import("data/bg/bg-ru.rules");

  return convertText(text, bgRuRules, {
    source: words => words.map(word => hyphenateBgPlaces(word)),
  });
};

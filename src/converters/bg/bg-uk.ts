import { Text } from "types";

export const bgUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyphenateBgPlaces } = await import("helpers/hyphenateBgPlaces");
  const { bgUkRules } = await import("data/bg/bg-uk.rules");

  return convertText(text, bgUkRules, {
    source: words => words.map(word => hyphenateBgPlaces(word, false)),
  });
};

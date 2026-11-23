import { Text } from "types";

export const bgKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyphenateBgPlaces } = await import("helpers/hyphenateBgPlaces");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, bgLatnRules + latnKaRules, {
    source: words => words.map(word => hyphenateBgPlaces(word)),
  });
};

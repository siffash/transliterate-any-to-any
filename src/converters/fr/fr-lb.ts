import { Text } from "types";

export const frLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaLbRules } = await import("data/ipa/ipa-lb.rules");

  return convertText(text, ipaLbRules, { source: frIpa, caseLang: "lb", elision: true });
};

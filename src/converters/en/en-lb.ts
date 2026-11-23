import { Text } from "types";

export const enLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaLbRules } = await import("data/ipa/ipa-lb.rules");

  return convertText(text, ipaLbRules, { source: enIpa, caseLang: "lb" });
};

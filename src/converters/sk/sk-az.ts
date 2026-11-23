import { Text } from "types";

export const skAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, skLatnRules + latnAzRules);
};

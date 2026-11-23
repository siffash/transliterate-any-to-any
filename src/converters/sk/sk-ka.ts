import { Text } from "types";

export const skKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, skLatnRules + latnKaRules);
};

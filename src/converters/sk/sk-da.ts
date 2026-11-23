import { Text } from "types";

export const skDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, skLatnRules + latnDaRules);
};

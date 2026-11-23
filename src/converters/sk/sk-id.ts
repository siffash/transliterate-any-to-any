import { Text } from "types";

export const skId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, skLatnRules + latnIdRules);
};

import { Text } from "types";

export const viBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, viLatnRules + latnBgRules);
};

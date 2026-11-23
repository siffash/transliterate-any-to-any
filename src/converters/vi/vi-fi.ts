import { Text } from "types";

export const viFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, viLatnRules + latnIRules + latnFiRules);
};

import { Text } from "types";

export const deBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { deLatnBgRules } = await import("data/de/de-latn_bg.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, deLatnRules + deLatnBgRules + latnBgRules);
};

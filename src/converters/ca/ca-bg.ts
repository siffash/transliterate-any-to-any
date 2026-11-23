import { Text } from "types";

export const caBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { caLatnDiphthongIRules } = await import("data/ca/ca-latn_diphthong-i.rules");

  return convertText(text, caLatnDiphthongIRules + caLatnRules + latnBgRules);
};

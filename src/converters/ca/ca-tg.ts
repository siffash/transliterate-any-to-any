import { Text } from "types";

export const caTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { caLatnDiphthongIRules } = await import("data/ca/ca-latn_diphthong-i.rules");

  return convertText(text, caLatnDiphthongIRules + caLatnRules + latnTgRules);
};

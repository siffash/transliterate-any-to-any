import { Text } from "types";

export const mtEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, mtLatnRules + latnEnRules);
};

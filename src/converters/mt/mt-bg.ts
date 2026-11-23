import { Text } from "types";

export const mtBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, mtLatnRules + latnBgRules);
};

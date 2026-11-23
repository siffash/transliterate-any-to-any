import { Text } from "types";

export const mtBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, mtLatnRules + latnBsRules);
};

import { Text } from "types";

export const mtId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, mtLatnRules + latnIdRules);
};

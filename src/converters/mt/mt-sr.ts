import { Text } from "types";

export const mtSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, mtLatnRules + latnSrRules);
};

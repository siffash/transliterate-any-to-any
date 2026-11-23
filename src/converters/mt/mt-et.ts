import { Text } from "types";

export const mtEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, mtLatnRules + latnEtRules);
};

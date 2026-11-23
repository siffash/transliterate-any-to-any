import { Text } from "types";

export const mtKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, mtLatnRules + latnKaRules);
};

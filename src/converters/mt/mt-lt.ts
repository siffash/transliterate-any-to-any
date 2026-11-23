import { Text } from "types";

export const mtLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  return convertText(text, mtLatnRules + latnLtRules);
};

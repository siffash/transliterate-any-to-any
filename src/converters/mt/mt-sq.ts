import { Text } from "types";

export const mtSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, mtLatnRules + latnSqRules);
};

import { Text } from "types";

export const roSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, roLatnRules + latnSqRules);
};

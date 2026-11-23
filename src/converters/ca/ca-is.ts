import { Text } from "types";

export const caIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, caLatnRules + latnIsRules);
};

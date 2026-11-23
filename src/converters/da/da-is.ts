import { Text } from "types";

export const daIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, daLatnRules + latnIsRules);
};

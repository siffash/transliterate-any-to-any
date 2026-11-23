import { Text } from "types";

export const svIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, svLatnRules + latnIsRules);
};

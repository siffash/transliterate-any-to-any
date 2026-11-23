import { Text } from "types";

export const azIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, azLatnRules + latnIsRules);
};

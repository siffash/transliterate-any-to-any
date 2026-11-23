import { Text } from "types";

export const sqIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, sqLatnRules + latnIsRules);
};

import { Text } from "types";

export const sqDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, sqLatnRules + latnDaRules);
};

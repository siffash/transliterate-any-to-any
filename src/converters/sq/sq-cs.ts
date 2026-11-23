import { Text } from "types";

export const sqCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  return convertText(text, sqLatnRules + latnCsRules);
};

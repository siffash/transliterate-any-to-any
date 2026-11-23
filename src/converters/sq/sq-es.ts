import { Text } from "types";

export const sqEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, sqLatnRules + latnEsRules);
};

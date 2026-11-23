import { Text } from "types";

export const nlPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  return convertText(text, nlLatnRules + latnPtRules);
};

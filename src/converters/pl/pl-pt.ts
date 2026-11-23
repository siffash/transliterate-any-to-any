import { Text } from "types";

export const plPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  return convertText(text, plLatnRules + latnPtRules);
};

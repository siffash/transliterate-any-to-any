import { Text } from "types";

export const ltPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  return convertText(text, ltLatnRules + latnPtRules);
};

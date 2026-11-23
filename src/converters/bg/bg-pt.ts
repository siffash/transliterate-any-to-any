import { Text } from "types";

export const bgPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnIyIiRules } = await import("data/latn/latn_iy-ii.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  return convertText(text, bgLatnRules + latnIyIiRules + latnPtRules);
};

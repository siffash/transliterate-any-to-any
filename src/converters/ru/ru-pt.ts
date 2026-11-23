import { Text } from "types";

export const ruPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnIyIiRules } = await import("data/latn/latn_iy-ii.rules");
  const { latnLNRules } = await import("data/latn/latn_l-n.rules");

  return convertText(
    text,
    ruLatnRules + latnSeparatorRules + latnIyIiRules + latnLNRules + latnPtRules,
  );
};

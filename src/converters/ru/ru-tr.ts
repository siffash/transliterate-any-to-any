import { Text } from "types";

export const ruTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnYjIRules } = await import("data/latn/latn_yj-i.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(
    text,
    ruLatnRules + latnSeparatorRules + latnYjIRules + latnIjRules + latnTrRules,
  );
};

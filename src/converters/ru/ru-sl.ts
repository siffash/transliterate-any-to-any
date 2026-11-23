import { Text } from "types";

export const ruSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");
  const { latnLNFinalRules } = await import("data/latn/latn_l-n-final.rules");

  return convertText(
    text,
    ruLatnRules + latnSeparatorRules + latnIjRules + latnLNFinalRules + latnSlRules,
  );
};

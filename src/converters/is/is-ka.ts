import { Text } from "types";

export const isKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnDlRules } = await import("data/is/is-latn_dl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, isLatnDlRules + isLatnRules + latnKaRules);
};

import { Text } from "types";

export const kkEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnJeRules } = await import("data/kk/kk-latn_je.rules");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, kkLatnJeRules + kkLatnRules + latnEtRules);
};

import { Text } from "types";

export const kkKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { kaKsRules } = await import("data/ka/ka_ks.rules");

  return convertText(text, kkLatnRules + latnKaRules + kaKsRules);
};

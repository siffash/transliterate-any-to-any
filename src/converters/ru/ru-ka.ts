import { Text } from "types";

export const ruKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { ruLatnKaRules } = await import("data/ru/ru-latn_ka.rules");
  const { latnYeRules } = await import("data/latn/latn_ye.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { kaKsRules } = await import("data/ka/ka_ks.rules");

  return convertText(text, ruLatnRules + ruLatnKaRules + latnYeRules + latnKaRules + kaKsRules);
};

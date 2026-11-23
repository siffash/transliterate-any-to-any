import { Text } from "types";

export const ukKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnYeRules } = await import("data/latn/latn_ye.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { kaKsRules } = await import("data/ka/ka_ks.rules");

  return convertText(text, ukLatnRules + latnYeRules + latnKaRules + kaKsRules);
};

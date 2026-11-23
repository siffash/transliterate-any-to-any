import { Text } from "types";

export const deKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { latnKaIuRules } = await import("data/latn/latn-ka_iu.rules");

  return convertText(text, deLatnRules + latnKaIuRules + latnKaRules);
};

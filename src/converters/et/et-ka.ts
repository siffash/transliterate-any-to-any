import { Text } from "types";

export const etKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { latnKaIuRules } = await import("data/latn/latn-ka_iu.rules");

  return convertText(text, etLatnRules + latnKaIuRules + latnKaRules);
};

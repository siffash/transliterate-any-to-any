import { Text } from "types";

export const kaDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, kaLatnRules + latnDzRules + latnDaRules);
};

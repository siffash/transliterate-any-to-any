import { Text } from "types";

export const kaEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { kaLatnEsRules } = await import("data/ka/ka-latn_es.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, kaLatnRules + kaLatnEsRules + latnDzRules + latnEsRules);
};

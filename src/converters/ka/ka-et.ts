import { Text } from "types";

export const kaEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnEtRules } = await import("data/ka/ka-latn_et.rules");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, kaLatnEtRules + kaLatnRules + latnEtRules);
};

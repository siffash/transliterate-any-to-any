import { Text } from "types";

export const skEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");

  return convertText(text, skLatnRules + latnThTRules + latnShSRules + latnEsRules);
};

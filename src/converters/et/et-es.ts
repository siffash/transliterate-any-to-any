import { Text } from "types";

export const etEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");

  return convertText(text, etLatnRules + latnThTRules + latnShSRules + latnIRules + latnEsRules);
};

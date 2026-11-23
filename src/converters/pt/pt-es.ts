import { Text } from "types";

export const ptEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  return convertText(text, ptLatnRules + latnShSRules + latnEsRules + latnXRules + latnKQuRules);
};

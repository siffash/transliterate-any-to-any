import { Text } from "types";

export const kkEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, kkLatnRules + latnDzjRules + latnDzRules + latnEsRules);
};

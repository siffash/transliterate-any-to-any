import { Text } from "types";

export const tgEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, tgLatnRules + latnDzjRules + latnDzRules + latnEsRules);
};

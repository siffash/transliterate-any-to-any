import { Text } from "types";

export const hyEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, hyLatnRules + latnDzRules + latnEsRules);
};

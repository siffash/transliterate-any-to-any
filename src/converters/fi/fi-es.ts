import { Text } from "types";

export const fiEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, fiLatnRules + latnThTRules + latnEsRules);
};

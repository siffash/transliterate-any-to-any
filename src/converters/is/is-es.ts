import { Text } from "types";

export const isEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, isLatnRules + latnEsRules);
};

import { Text } from "types";

export const isEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, isLatnRules + latnEtRules);
};

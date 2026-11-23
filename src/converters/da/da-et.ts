import { Text } from "types";

export const daEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, daLatnRules + latnEtRules);
};

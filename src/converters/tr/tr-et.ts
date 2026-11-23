import { Text } from "types";

export const trEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, trLatnRules + latnEtRules);
};

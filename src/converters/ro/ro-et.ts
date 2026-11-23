import { Text } from "types";

export const roEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, roLatnRules + latnEtRules);
};

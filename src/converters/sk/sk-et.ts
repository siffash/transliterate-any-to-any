import { Text } from "types";

export const skEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, skLatnRules + latnEtRules);
};

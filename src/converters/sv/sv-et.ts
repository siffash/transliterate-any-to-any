import { Text } from "types";

export const svEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, svLatnRules + latnEtRules);
};

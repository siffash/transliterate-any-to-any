import { Text } from "types";

export const caEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, caLatnRules + latnEtRules);
};

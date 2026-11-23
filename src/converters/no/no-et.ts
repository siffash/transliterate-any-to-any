import { Text } from "types";

export const noEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, noLatnRules + latnEtRules);
};

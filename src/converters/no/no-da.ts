import { Text } from "types";

export const noDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, noLatnRules + latnDaRules);
};

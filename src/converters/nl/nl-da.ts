import { Text } from "types";

export const nlDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, nlLatnRules + latnDaRules);
};

import { Text } from "types";

export const nlIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, nlLatnRules + latnIsRules);
};

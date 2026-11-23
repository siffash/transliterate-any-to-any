import { Text } from "types";

export const nlId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, nlLatnRules + latnIdRules);
};

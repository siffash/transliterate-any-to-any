import { Text } from "types";

export const nlEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, nlLatnRules + latnEtRules);
};

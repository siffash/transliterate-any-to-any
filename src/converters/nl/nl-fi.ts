import { Text } from "types";

export const nlFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  return convertText(text, nlLatnRules + latnFiRules);
};

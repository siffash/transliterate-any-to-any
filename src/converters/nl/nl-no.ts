import { Text } from "types";

export const nlNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, nlLatnRules + latnNoRules);
};

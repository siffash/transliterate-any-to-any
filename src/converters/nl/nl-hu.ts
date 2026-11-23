import { Text } from "types";

export const nlHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, nlLatnRules + latnHuRules);
};

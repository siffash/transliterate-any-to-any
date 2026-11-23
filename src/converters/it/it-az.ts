import { Text } from "types";

export const itAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, itLatnRules + latnAzRules);
};

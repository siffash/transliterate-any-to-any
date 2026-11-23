import { Text } from "types";

export const itIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, itLatnRules + latnIsRules);
};

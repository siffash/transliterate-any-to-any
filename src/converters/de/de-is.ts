import { Text } from "types";

export const deIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, deLatnRules + latnIsRules);
};

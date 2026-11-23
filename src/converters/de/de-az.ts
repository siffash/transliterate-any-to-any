import { Text } from "types";

export const deAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, deLatnRules + latnAzRules);
};

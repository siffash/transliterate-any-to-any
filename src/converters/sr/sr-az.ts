import { Text } from "types";

export const srAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, srLatnRules + latnAzRules);
};

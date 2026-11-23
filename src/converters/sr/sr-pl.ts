import { Text } from "types";

export const srPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, srLatnRules + latnPlRules);
};

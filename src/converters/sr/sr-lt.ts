import { Text } from "types";

export const srLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  return convertText(text, srLatnRules + latnLtRules);
};

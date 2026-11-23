import { Text } from "types";

export const srId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, srLatnRules + latnIdRules);
};

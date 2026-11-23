import { Text } from "types";

export const srEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, srLatnRules + latnElRules);
};

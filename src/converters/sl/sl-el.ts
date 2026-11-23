import { Text } from "types";

export const slEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, slLatnRules + latnElRules);
};

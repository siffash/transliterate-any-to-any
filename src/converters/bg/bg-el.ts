import { Text } from "types";

export const bgEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnElFinalVRules } = await import("data/latn/latn-el_final-v.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, bgLatnRules + latnElFinalVRules + latnElRules);
};

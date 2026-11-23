import { Text } from "types";

export const kkEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnElFinalVRules } = await import("data/latn/latn-el_final-v.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, kkLatnRules + latnElFinalVRules + latnElRules);
};

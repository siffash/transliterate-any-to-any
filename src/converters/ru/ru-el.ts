import { Text } from "types";

export const ruEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnElFinalVRules } = await import("data/latn/latn-el_final-v.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnElFinalVRules + latnElRules);
};

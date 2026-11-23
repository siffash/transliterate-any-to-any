import { Text } from "types";

export const esEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");
  const { latnElDRules } = await import("data/latn/latn-el_d.rules");

  return convertText(text, esLatnRules + latnElDRules + latnElRules);
};

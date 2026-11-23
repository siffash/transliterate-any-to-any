import { Text } from "types";

export const bsEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, bsLatnRules + latnElRules);
};

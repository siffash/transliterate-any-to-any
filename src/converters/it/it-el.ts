import { Text } from "types";

export const itEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, itLatnRules + latnElRules);
};

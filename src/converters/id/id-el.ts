import { Text } from "types";

export const idEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, msIdLatnRules + latnElRules);
};

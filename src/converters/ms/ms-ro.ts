import { Text } from "types";

export const msRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  return convertText(text, msIdLatnRules + latnRoRules);
};

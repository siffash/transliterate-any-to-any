import { Text } from "types";

export const idBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, msIdLatnRules + latnBgRules);
};

import { Text } from "types";

export const idNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, msIdLatnRules + latnNoRules);
};

import { Text } from "types";

export const idDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, msIdLatnRules + latnDaRules);
};

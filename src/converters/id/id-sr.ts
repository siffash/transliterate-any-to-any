import { Text } from "types";

export const idSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, msIdLatnRules + latnSrRules);
};

import { Text } from "types";

export const deSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { deLatnDtRules } = await import("data/de/de-latn_dt.rules");
  const { deLatnOeRules } = await import("data/de/de-latn_oe.rules");

  return convertText(text, deLatnRules + deLatnDtRules + deLatnOeRules + latnSrRules);
};

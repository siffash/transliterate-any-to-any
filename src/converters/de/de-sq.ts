import { Text } from "types";

export const deSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { deLatnDtRules } = await import("data/de/de-latn_dt.rules");

  return convertText(text, deLatnRules + deLatnDtRules + latnSqRules);
};
